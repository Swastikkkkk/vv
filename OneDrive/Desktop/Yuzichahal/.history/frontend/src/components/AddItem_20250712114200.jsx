// src/components/AddItem.jsx
import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, storage, auth } from '../FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddItem = () => {
  const [user] = useAuthState(auth);

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

  const categories = ['Ethnic', 'Western', 'Kidswear', 'Accessories', 'Modern'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!user) return setError("You must be logged in to post an item.");
    if (!image) return setError("Please select an image.");
    if (!category) return setError("Please select a category.");

    setLoading(true);

    try {
      const imageRef = ref(storage, `items/${user.uid}/${Date.now()}_${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, 'items'), {
        title,
        description,
        category,
        size,
        condition,
        tags: tags.split(',').map(tag => tag.trim()),
        imageUrl,
        postedBy: user.uid,
        createdAt: serverTimestamp()
      });

      setSuccess("Item listed successfully!");
      setTitle('');
      setDescription('');
      setCategory('');
      setSize('');
      setCondition('');
      setTags('');
      setImage(null);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#1a3d35]">Add New Item</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Image Upload on Left */}
        <div className="flex flex-col gap-4">
          <label className="block text-sm font-medium text-[#1a3d35]">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border p-2 rounded-lg"
            required
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="rounded-lg max-h-64 object-cover"
            />
          )}
        </div>

        {/* Form Fields on Right */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="px-4 py-2 border rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="px-4 py-2 border rounded-lg"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg"
            required
          >
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Size (e.g., M, L, XL)"
            className="px-4 py-2 border rounded-lg"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Condition (e.g., New, Gently Used)"
            className="px-4 py-2 border rounded-lg"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            className="px-4 py-2 border rounded-lg"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            type="submit"
            className="py-2 bg-[#447d68] text-white rounded-lg hover:bg-[#366755] transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Post Item"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
