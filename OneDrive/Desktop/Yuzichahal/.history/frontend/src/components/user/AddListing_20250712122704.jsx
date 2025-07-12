// // // import React, { useState } from 'react';
// // // import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// // // import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// // // import { db } from '../FirebaseConfig'; // adjust if your path differs
// // // import { v4 as uuidv4 } from 'uuid';

// // // const AddListing = () => {
// // //   const [image, setImage] = useState(null);
// // //   const [imageUrl, setImageUrl] = useState('');
// // //   const [uploading, setUploading] = useState(false);

// // //   const [form, setForm] = useState({
// // //     title: '',
// // //     description: '',
// // //     category: '',
// // //     type: '',
// // //     size: '',
// // //     condition: '',
// // //     tags: ''
// // //   });

// // //   const categoryOptions = ['Ethnic', 'Western', 'Kidswear', 'Accessories', 'Modern'];
// // //   const typeOptions = ['Shirt', 'Dress', 'Kurta', 'Saree', 'T-Shirt', 'Lehenga'];
// // //   const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
// // //   const conditionOptions = ['New', 'Like New', 'Gently Used', 'Used', 'Worn'];

// // //   const handleInputChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const handleImageUpload = async (e) => {
// // //     const file = e.target.files[0];
// // //     if (!file) return;

// // //     const storage = getStorage();
// // //     const storageRef = ref(storage, `products/${uuidv4()}-${file.name}`);
// // //     setUploading(true);

// // //     try {
// // //       await uploadBytes(storageRef, file);
// // //       const url = await getDownloadURL(storageRef);
// // //       setImageUrl(url);
// // //       setImage(file);
// // //     } catch (err) {
// // //       alert('Image upload failed.');
// // //     } finally {
// // //       setUploading(false);
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!imageUrl) {
// // //       alert('Please upload an image.');
// // //       return;
// // //     }

// // //     try {
// // //       await addDoc(collection(db, 'products'), {
// // //         ...form,
// // //         tags: form.tags.split(',').map(tag => tag.trim()),
// // //         imageUrl,
// // //         createdAt: serverTimestamp()
// // //       });

// // //       alert('Product listed successfully!');
// // //       setForm({
// // //         title: '',
// // //         description: '',
// // //         category: '',
// // //         type: '',
// // //         size: '',
// // //         condition: '',
// // //         tags: ''
// // //       });
// // //       setImage(null);
// // //       setImageUrl('');
// // //     } catch (err) {
// // //       alert('Error saving product.');
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen p-6 bg-[#f3f6f5]">
// // //       <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 shadow-lg">
// // //         <h2 className="text-2xl font-semibold mb-6 text-[#1a3d35]">Add New Item</h2>

// // //         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
// // //           {/* Image Upload */}
// // //           <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 bg-gray-50">
// // //             {imageUrl ? (
// // //               <img src={imageUrl} alt="Uploaded" className="w-full h-64 object-cover rounded-lg" />
// // //             ) : (
// // //               <label className="cursor-pointer text-center text-[#447d68] hover:underline">
// // //                 <input
// // //                   type="file"
// // //                   accept="image/*"
// // //                   className="hidden"
// // //                   onChange={handleImageUpload}
// // //                 />
// // //                 {uploading ? 'Uploading...' : 'Click to Upload Image'}
// // //               </label>
// // //             )}
// // //           </div>

// // //           {/* Form Fields */}
// // //           <div className="space-y-4">
// // //             <input
// // //               type="text"
// // //               name="title"
// // //               placeholder="Title"
// // //               value={form.title}
// // //               onChange={handleInputChange}
// // //               className="w-full px-4 py-3 border rounded-lg"
// // //               required
// // //             />

// // //             <textarea
// // //               name="description"
// // //               placeholder="Enter a detailed description..."
// // //               value={form.description}
// // //               onChange={handleInputChange}
// // //               className="w-full px-4 py-3 border rounded-lg h-28 resize-none"
// // //               required
// // //             />

// // //             <select
// // //               name="category"
// // //               value={form.category}
// // //               onChange={handleInputChange}
// // //               className="w-full px-4 py-3 border rounded-lg bg-white"
// // //               required
// // //             >
// // //               <option value="">Select Category</option>
// // //               {categoryOptions.map((cat) => (
// // //                 <option key={cat} value={cat}>{cat}</option>
// // //               ))}
// // //             </select>

// // //             <select
// // //               name="type"
// // //               value={form.type}
// // //               onChange={handleInputChange}
// // //               className="w-full px-4 py-3 border rounded-lg bg-white"
// // //               required
// // //             >
// // //               <option value="">Select Type</option>
// // //               {typeOptions.map((type) => (
// // //                 <option key={type} value={type}>{type}</option>
// // //               ))}
// // //             </select>

// // //             <select
// // //               name="size"
// // //               value={form.size}
// // //               onChange={handleInputChange}
// // //               className="w-full px-4 py-3 border rounded-lg bg-white"
// // //               required
// // //             >
// // //               <option value="">Select Size</option>
// // //               {sizeOptions.map((size) => (
// // //                 <option key={size} value={size}>{size}</option>
// // //               ))}
// // //             </select>

// // //             <select
// // //               name="condition"
// // //               value={form.condition}
// // //               onChange={handleInputChange}
// // //               className="w-full px-4 py-3 border rounded-lg bg-white"
// // //               required
// // //             >
// // //               <option value="">Select Condition</option>
// // //               {conditionOptions.map((cond) => (
// // //                 <option key={cond} value={cond}>{cond}</option>
// // //               ))}
// // //             </select>

// // //             <input
// // //               type="text"
// // //               name="tags"
// // //               placeholder="Tags (comma separated)"
// // //               value={form.tags}
// // //               onChange={handleInputChange}
// // //               className="w-full px-4 py-3 border rounded-lg"
// // //             />

// // //             <button
// // //               type="submit"
// // //               className="w-full bg-[#447d68] text-white py-3 rounded-lg hover:bg-[#366755] transition"
// // //               disabled={uploading}
// // //             >
// // //               {uploading ? 'Saving...' : 'Submit Listing'}
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AddListing;
// // import React, { useState } from 'react';
// // import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// // import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// // import { db } from '../FirebaseConfig';
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
// //     tags: '',
// //     contact: '',
// //     location: '',
// //     points: ''
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
// //     const filePath = `products/${uuidv4()}-${file.name}`;
// //     const storageRef = ref(storage, filePath);
// //     setUploading(true);

// //     try {
// //       await uploadBytes(storageRef, file);
// //       const url = await getDownloadURL(storageRef);
// //       setImageUrl(url);
// //       setImage(file);
// //     } catch (err) {
// //       console.error('Image upload failed:', err);
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
// //         tags: '',
// //         contact: '',
// //         location: '',
// //         points: ''
// //       });
// //       setImage(null);
// //       setImageUrl('');
// //     } catch (err) {
// //       console.error('Error saving product:', err);
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

// //             <input
// //               type="text"
// //               name="location"
// //               placeholder="Location"
// //               value={form.location}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 border rounded-lg"
// //               required
// //             />

// //             <input
// //               type="email"
// //               name="contact"
// //               placeholder="Contact Email"
// //               value={form.contact}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 border rounded-lg"
// //               required
// //             />

// //             <input
// //               type="number"
// //               name="points"
// //               placeholder="Points to Redeem"
// //               value={form.points}
// //               onChange={handleInputChange}
// //               className="w-full px-4 py-3 border rounded-lg"
// //               required
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
//       alert('Please upload an image first.');
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

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file.');
      return;
    }

    // Validate file size (e.g., max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB.');
      return;
    }

    const storage = getStorage();
    const fileName = `${uuidv4()}-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const filePath = `products/${fileName}`;
    const storageRef = ref(storage, filePath);

    setUploading(true);

    try {
      console.log('Starting upload...');
      
      // Upload the file with metadata
      const metadata = {
        contentType: file.type,
        customMetadata: {
          'uploadedBy': 'user',
          'uploadedAt': new Date().toISOString()
        }
      };

      const snapshot = await uploadBytes(storageRef, file, metadata);
      console.log('Upload successful:', snapshot);

      // Get the download URL
      const url = await getDownloadURL(storageRef);
      console.log('Download URL:', url);
      
      setImageUrl(url);
      alert('Image uploaded successfully!');
    } catch (err) {
      console.error('Image upload failed:', err);
      
      // More specific error handling
      if (err.code === 'storage/unauthorized') {
        alert('Upload failed: Unauthorized. Please check your Firebase security rules.');
      } else if (err.code === 'storage/canceled') {
        alert('Upload was canceled.');
      } else if (err.code === 'storage/unknown') {
        alert('Upload failed: Unknown error. Please try again.');
      } else {
        alert(`Upload failed: ${err.message}`);
      }
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

    // Validate required fields
    const requiredFields = ['title', 'description', 'category', 'type', 'size', 'condition', 'location', 'contact', 'points'];
    for (const field of requiredFields) {
      if (!form[field]) {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }

    try {
      await addDoc(collection(db, 'products'), {
        ...form,
        tags: form.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
        imageUrl,
        createdAt: serverTimestamp(),
        status: 'active'
      });

      alert('Product listed successfully!');
      
      // Reset form
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
      setImageUrl('');
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      
    } catch (err) {
      console.error('Error saving product:', err);
      alert(`Error saving product: ${err.message}`);
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
              <div className="w-full">
                <img src={imageUrl} alt="Uploaded" className="w-full h-64 object-cover rounded-lg mb-4" />
                <button
                  type="button"
                  onClick={() => setImageUrl('')}
                  className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove Image
                </button>
              </div>
            ) : (
              <label className="cursor-pointer text-center text-[#447d68] hover:underline">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                  disabled={uploading}
                />
                <div className="flex flex-col items-center">
                  <svg className="w-12 h-12 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  {uploading ? 'Uploading...' : 'Click to Upload Image'}
                </div>
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
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#447d68]" 
              required 
            />
            
            <textarea 
              name="description" 
              placeholder="Enter a detailed description..." 
              value={form.description} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 border rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#447d68]" 
              required 
            />
            
            <select 
              name="category" 
              value={form.category} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#447d68]" 
              required
            >
              <option value="">Select Category</option>
              {categoryOptions.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>

            <select 
              name="type" 
              value={form.type} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#447d68]" 
              required
            >
              <option value="">Select Type</option>
              {typeOptions.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>

            <select 
              name="size" 
              value={form.size} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#447d68]" 
              required
            >
              <option value="">Select Size</option>
              {sizeOptions.map((size) => <option key={size} value={size}>{size}</option>)}
            </select>

            <select 
              name="condition" 
              value={form.condition} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#447d68]" 
              required
            >
              <option value="">Select Condition</option>
              {conditionOptions.map((cond) => <option key={cond} value={cond}>{cond}</option>)}
            </select>

            <input 
              type="text" 
              name="tags" 
              placeholder="Tags (comma separated)" 
              value={form.tags} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#447d68]" 
            />
            
            <input 
              type="text" 
              name="location" 
              placeholder="Location" 
              value={form.location} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#447d68]" 
              required 
            />
            
            <input 
              type="email" 
              name="contact" 
              placeholder="Contact Email" 
              value={form.contact} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#447d68]" 
              required 
            />
            
            <input 
              type="number" 
              name="points" 
              placeholder="Points to Redeem" 
              value={form.points} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#447d68]" 
              required 
              min="0"
            />

            <button 
              type="submit" 
              className="w-full bg-[#447d68] text-white py-3 rounded-lg hover:bg-[#366755] transition disabled:bg-gray-400 disabled:cursor-not-allowed" 
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Submit Listing'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;