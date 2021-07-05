import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  itemsCol: AngularFirestoreCollection;

  constructor(
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {
    this.itemsCol = this.afs.collection('items');
  }

  async getGalleryItems(): Promise<Item[]> {
    const items = await this.itemsCol.ref.where('inGallery', '==', true).get();
    return items.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    })) as Item[];
  }

  async getStoreItems(): Promise<Item[]> {
    const items = await this.itemsCol.ref.where('inStore', '==', true).get();
    return items.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    })) as Item[];
  }

  async getItem(id: string): Promise<Item> {
    const item = await this.itemsCol.doc(id).ref.get();
    return { ...item.data(), id: item.id } as Item;
  }

  async addItem(
    item: Item,
    mainImage: File,
    itemImages: File[]
  ): Promise<void> {
    const docRef = await this.itemsCol.add(item);

    const mainImageRef = this.afStorage.ref(
      `${docRef.id}/${Math.random().toString(36).substring(2)}`
    );
    await mainImageRef.put(mainImage);
    mainImageRef.getDownloadURL().subscribe((url) => {
      docRef.update({ mainImageUrl: url });
    });

    for (const image of itemImages) {
      const imageRef = this.afStorage.ref(
        `${docRef.id}/${Math.random().toString(36).substring(2)}`
      );
      await imageRef.put(image);
      imageRef.getDownloadURL().subscribe((url) => {
        docRef.update({ imageUrls: firestore.FieldValue.arrayUnion(url) });
      });
    }
  }

  deleteItem(id: string): Promise<void> {
    return this.itemsCol.doc(id).ref.delete();
  }
}
