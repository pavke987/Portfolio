import { db } from './firebase';

export const getIdeas = () => {
  return db.collection('ideas').get();
}
export const getIdea = (id) => {
  return db.doc(`ideas/${id}`).get();
}

export const getCategories = () => {
  return db.collection('categories').get();
}

export const saveIdea = (idea) => {
  db.collection("ideas").add({
    time: idea.time,
    date: idea.date,
    title: idea.title,
    idea: idea.idea,
    rate: idea.rate,
    category: idea.category,
    expectations: idea.expectations,
  }).then((response) => {
    console.log(response)
  }).catch(error => {
    console.log(error.message);
  });
}
 
export const deleteIdea = id => {
  return db.doc(`ideas/${id}`).delete();

}

export const updateIdea = (id, idea) => {
  return db.doc(`ideas/${id}`).update(idea);
}

export const addCategory = (newCategory) => {
  return db.collection(`categories`).add(newCategory)
}

export const deleteCategory = (id) => {
  return db.doc(`categories/${id}`).delete()
}
