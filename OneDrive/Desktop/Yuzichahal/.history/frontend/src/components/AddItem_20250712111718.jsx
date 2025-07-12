// src/components/AddItem.jsx
import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../FirebaseConfig'; // adjust if needed
import { storage } from '../FirebaseConfig'; // make sure storage is exported
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FirebaseConfig';

const AddItem = () => {
  const [user] = useAuthState(auth); // get current user
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [condition, setCondition] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return setError("You must be logged in to post an item.");
    if (!image) return setError("Please select an image.");

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Upload image to Firebase Storage
      const imageRef = ref(storage, `items/${user.uid}/${Date.now()}_${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Save item data to Firestore
      await addDoc(collection(db, 'items'), {
        title,
        description,
        category,
        size,
        condition,
        tags: tags.split(',').map(t => t.trim()),
        imageUrl,
        postedBy: user.uid,
        createdAt: serverTimestamp()
      });

      setSuccess("Item listed successfully!");
      // Reset form
      setTitle('');
      setDescription('');
      setCategory('');
      setSize('');
      setCondition('');
      setTags('');
      setImage(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#1a3d35]">List an Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full px-4 py-2 border rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full px-4 py-2 border rounded-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Category (e.g., Traditional, Western)"
          className="w-full px-4 py-2 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Size (e.g., M, L, XL)"
          className="w-full px-4 py-2 border rounded-lg"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Condition (e.g., New, Gently Used)"
          className="w-full px-4 py-2 border rounded-lg"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="w-full px-4 py-2 border rounded-lg"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="w-full"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center">{success}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-[#447d68] text-white rounded-lg hover:bg-[#366755] transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Post Item"}
        </button>
      </form>
    </div>
  );
};

export default AddItem;
