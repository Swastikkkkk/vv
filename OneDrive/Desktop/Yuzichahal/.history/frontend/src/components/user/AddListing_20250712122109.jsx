// // import React, { useState } from 'react';
// // import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// // import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// // import { db } from '../FirebaseConfig'; // adjust if your path differs
// // import { v4 as uuidv4 } from 'uuid';

// // const AddListing = () => {
// //   const [image, setImage] = useState(null);
// //   const [imageUrl, setImageUrl] = useState('');
// //   const [uploading, setUploading] = useState(false);

// //   const [form, setForm] = useState({
// //     title: '',
// //     description: '',
// //     category: '',
// //     type: '',
// //     size: '',
// //     condition: '',
// //     tags: ''
// //   });

// //   const categoryOptions = ['Ethnic', 'Western', 'Kidswear', 'Accessories', 'Modern'];
// //   const typeOptions = ['Shirt', 'Dress', 'Kurta', 'Saree', 'T-Shirt', 'Lehenga'];
// //   const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
// //   const conditionOptions = ['New', 'Like New', 'Gently Used', 'Used', 'Worn'];

// //   const handleInputChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleImageUpload = async (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     const storage = getStorage();
// //     const storageRef = ref(storage, `products/${uuidv4()}-${file.name}`);
// //     setUploading(true);

// //     try {
// //       await uploadBytes(storageRef, file);
// //       const url = await getDownloadURL(storageRef);
// //       setImageUrl(url);
// //       setImage(file);
// //     } catch (err) {
// //       alert('Image upload failed.');
// //     } finally {
// //       setUploading(false);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!imageUrl) {
// //       alert('Please upload an image.');
// //       return;
// //     }

// //     try {
// //       await addDoc(collection(db, 'products'), {
// //         ...form,
// //         tags: form.tags.split(',').map(tag => tag.trim()),
// //         imageUrl,
// //         createdAt: serverTimestamp()
// //       });

// //       alert('Product listed successfully!');
// //       setForm({
// //         title: '',
// //         description: '',
// //         category: '',
// //         type: '',
// //         size: '',
// //         condition: '',
// //         tags: ''
// //       });
// //       setImage(null);
// //       setImageUrl('');
// //     } catch (err) {
// //       alert('Error saving product.');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen p-6 bg-[#f3f6f5]">
// //       <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 shadow-lg">
// //         <h2 className="text-2xl font-semibold mb-6 text-[#1a3d35]">Add New Item</h2>

// //         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
// //           {/* Image Upload */}
// //           <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50">
// //             {imageUrl ? (
// //               <img src={imageUrl} alt="Uploaded" className="w-full h-64 object-cover rounded-lg" />
// //             ) : (
// //               <label className="cursor-pointer text-center text-[#447d68] hover:underline">
// //                 <input
// //                   type="file"
// //                   accept="image/*"
// //                   className="hidden"
// //                   onChange={handleImageUpload}
// //                 />
// //                 {uploading ? 'Uploading...' : 'Click to Upload Image'}
// //               </label>
// //             )}
// //           </div>

// //           {/* Form Fields */}
// //           <div className="space-y-4">
// //             <input
// //               type="text"
// //               name="title"
// //               placeholder="Title"
// //               value={form.title}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 border rounded-lg"
// //               required
// //             />

// //             <textarea
// //               name="description"
// //               placeholder="Enter a detailed description..."
// //               value={form.description}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 border rounded-lg h-28 resize-none"
// //               required
// //             />

// //             <select
// //               name="category"
// //               value={form.category}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 border rounded-lg bg-white"
// //               required
// //             >
// //               <option value="">Select Category</option>
// //               {categoryOptions.map((cat) => (
// //                 <option key={cat} value={cat}>{cat}</option>
// //               ))}
// //             </select>

// //             <select
// //               name="type"
// //               value={form.type}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 border rounded-lg bg-white"
// //               required
// //             >
// //               <option value="">Select Type</option>
// //               {typeOptions.map((type) => (
// //                 <option key={type} value={type}>{type}</option>
// //               ))}
// //             </select>

// //             <select
// //               name="size"
// //               value={form.size}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 border rounded-lg bg-white"
// //               required
// //             >
// //               <option value="">Select Size</option>
// //               {sizeOptions.map((size) => (
// //                 <option key={size} value={size}>{size}</option>
// //               ))}
// //             </select>

// //             <select
// //               name="condition"
// //               value={form.condition}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 border rounded-lg bg-white"
// //               required
// //             >
// //               <option value="">Select Condition</option>
// //               {conditionOptions.map((cond) => (
// //                 <option key={cond} value={cond}>{cond}</option>
// //               ))}
// //             </select>

// //             <input
// //               type="text"
// //               name="tags"
// //               placeholder="Tags (comma separated)"
// //               value={form.tags}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 border rounded-lg"
// //             />

// //             <button
// //               type="submit"
// //               className="w-full bg-[#447d68] text-white py-3 rounded-lg hover:bg-[#366755] transition"
// //               disabled={uploading}
// //             >
// //               {uploading ? 'Saving...' : 'Submit Listing'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddListing;
// import React, { useState } from 'react';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { db } from '../FirebaseConfig';
// import { v4 as uuidv4 } from 'uuid';

// const AddListing = () => {
//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState('');
//   const [uploading, setUploading] = useState(false);

//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     category: '',
//     type: '',
//     size: '',
//     condition: '',
//     tags: '',
//     contact: '',
//     location: '',
//     points: ''
//   });

//   const categoryOptions = ['Ethnic', 'Western', 'Kidswear', 'Accessories', 'Modern'];
//   const typeOptions = ['Shirt', 'Dress', 'Kurta', 'Saree', 'T-Shirt', 'Lehenga'];
//   const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
//   const conditionOptions = ['New', 'Like New', 'Gently Used', 'Used', 'Worn'];

//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const storage = getStorage();
//     const filePath = `products/${uuidv4()}-${file.name}`;
//     const storageRef = ref(storage, filePath);
//     setUploading(true);

//     try {
//       await uploadBytes(storageRef, file);
//       const url = await getDownloadURL(storageRef);
//       setImageUrl(url);
//       setImage(file);
//     } catch (err) {
//       console.error('Image upload failed:', err);
//       alert('Image upload failed.');
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!imageUrl) {
//       alert('Please upload an image.');
//       return;
//     }

//     try {
//       await addDoc(collection(db, 'products'), {
//         ...form,
//         tags: form.tags.split(',').map(tag => tag.trim()),
//         imageUrl,
//         createdAt: serverTimestamp()
//       });

//       alert('Product listed successfully!');
//       setForm({
//         title: '',
//         description: '',
//         category: '',
//         type: '',
//         size: '',
//         condition: '',
//         tags: '',
//         contact: '',
//         location: '',
//         points: ''
//       });
//       setImage(null);
//       setImageUrl('');
//     } catch (err) {
//       console.error('Error saving product:', err);
//       alert('Error saving product.');
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 bg-[#f3f6f5]">
//       <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 shadow-lg">
//         <h2 className="text-2xl font-semibold mb-6 text-[#1a3d35]">Add New Item</h2>

//         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
//           {/* Image Upload */}
//           <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50">
//             {imageUrl ? (
//               <img src={imageUrl} alt="Uploaded" className="w-full h-64 object-cover rounded-lg" />
//             ) : (
//               <label className="cursor-pointer text-center text-[#447d68] hover:underline">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleImageUpload}
//                 />
//                 {uploading ? 'Uploading...' : 'Click to Upload Image'}
//               </label>
//             )}
//           </div>

//           {/* Form Fields */}
//           <div className="space-y-4">
//             <input
//               type="text"
//               name="title"
//               placeholder="Title"
//               value={form.title}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border rounded-lg"
//               required
//             />

//             <textarea
//               name="description"
//               placeholder="Enter a detailed description..."
//               value={form.description}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border rounded-lg h-28 resize-none"
//               required
//             />

//             <select
//               name="category"
//               value={form.category}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border rounded-lg bg-white"
//               required
//             >
//               <option value="">Select Category</option>
//               {categoryOptions.map((cat) => (
//                 <option key={cat} value={cat}>{cat}</option>
//               ))}
//             </select>

//             <select
//               name="type"
//               value={form.type}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border rounded-lg bg-white"
//               required
//             >
//               <option value="">Select Type</option>
//               {typeOptions.map((type) => (
//                 <option key={type} value={type}>{type}</option>
//               ))}
//             </select>

//             <select
//               name="size"
//               value={form.size}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border rounded-lg bg-white"
//               required
//             >
//               <option value="">Select Size</option>
//               {sizeOptions.map((size) => (
//                 <option key={size} value={size}>{size}</option>
//               ))}
//             </select>

//             <select
//               name="condition"
//               value={form.condition}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border rounded-lg bg-white"
//               required
//             >
//               <option value="">Select Condition</option>
//               {conditionOptions.map((cond) => (
//                 <option key={cond} value={cond}>{cond}</option>
//               ))}
//             </select>

//             <input
//               type="text"
//               name="tags"
//               placeholder="Tags (comma separated)"
//               value={form.tags}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border rounded-lg"
//             />

//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               value={form.location}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border rounded-lg"
//               required
//             />

//             <input
//               type="email"
//               name="contact"
//               placeholder="Contact Email"
//               value={form.contact}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border rounded-lg"
//               required
//             />

//             <input
//               type="number"
//               name="points"
//               placeholder="Points to Redeem"
//               value={form.points}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border rounded-lg"
//               required
//             />

//             <button
//               type="submit"
//               className="w-full bg-[#447d68] text-white py-3 rounded-lg hover:bg-[#366755] transition"
//               disabled={uploading}
//             >
//               {uploading ? 'Saving...' : 'Submit Listing'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddListing;
import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { v4 as uuidv4 } from 'uuid';

const AddListing = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    type: '',
    size: '',
    condition: '',
    tags: '',
    contact: '',
    location: '',
    points: ''
  });

  const categoryOptions = ['Ethnic', 'Western', 'Kidswear', 'Accessories', 'Modern'];
  const typeOptions = ['Shirt', 'Dress', 'Kurta', 'Saree', 'T-Shirt', 'Lehenga'];
  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const conditionOptions = ['New', 'Like New', 'Gently Used', 'Used', 'Worn'];

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const storage = getStorage();
    const filePath = `products/${uuidv4()}-${file.name}`;
    const storageRef = ref(storage, filePath);
    setUploading(true);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      setImage(file);
    } catch (err) {
      console.error('Image upload failed:', err);
      alert('Image upload failed.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      alert('Please upload an image first.');
      return;
    }

    try {
      await addDoc(collection(db, 'products'), {
        ...form,
        tags: form.tags.split(',').map(tag => tag.trim()),
        imageUrl,
        createdAt: serverTimestamp()
      });

      alert('Product listed successfully!');
      setForm({
        title: '',
        description: '',
        category: '',
        type: '',
        size: '',
        condition: '',
        tags: '',
        contact: '',
        location: '',
        points: ''
      });
      setImage(null);
      setImageUrl('');
    } catch (err) {
      console.error('Error saving product:', err);
      alert('Error saving product.');
    }
  };

  return (
    <div className="min-h-screen p-6 bg-[#f3f6f5]">
      <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-[#1a3d35]">Add New Item</h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
          {/* Image Upload */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50">
            {imageUrl ? (
              <img src={imageUrl} alt="Uploaded" className="w-full h-64 object-cover rounded-lg" />
            ) : (
              <label className="cursor-pointer text-center text-[#447d68] hover:underline">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                {uploading ? 'Uploading...' : 'Click to Upload Image'}
              </label>
            )}
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg"
              required
            />

            <textarea
              name="description"
              placeholder="Enter a detailed description..."
              value={form.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg h-28 resize-none"
              required
            />

            <select
              name="category"
              value={form.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg bg-white"
              required
            >
              <option value="">Select Category</option>
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              name="type"
              value={form.type}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg bg-white"
              required
            >
              <option value="">Select Type</option>
              {typeOptions.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select
              name="size"
              value={form.size}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg bg-white"
              required
            >
              <option value="">Select Size</option>
              {sizeOptions.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>

            <select
              name="condition"
              value={form.condition}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg bg-white"
              required
            >
              <option value="">Select Condition</option>
              {conditionOptions.map((cond) => (
                <option key={cond} value={cond}>{cond}</option>
              ))}
            </select>

            <input
              type="text"
              name="tags"
              placeholder="Tags (comma separated)"
              value={form.tags}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg"
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg"
              required
            />

            <input
              type="email"
              name="contact"
              placeholder="Contact Email"
              value={form.contact}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg"
              required
            />

            <input
              type="number"
              name="points"
              placeholder="Points to Redeem"
              value={form.points}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#447d68] text-white py-3 rounded-lg hover:bg-[#366755] transition"
              disabled={uploading}
            >
              {uploading ? 'Saving...' : 'Submit Listing'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
