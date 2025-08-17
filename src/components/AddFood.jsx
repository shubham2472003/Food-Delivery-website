import { useState } from "react";

function AddFood() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setMessage("Please select an image before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("image", image); // ✅ Must match backend multer field

    try {
      const res = await fetch("http://localhost:4000/api/food/add", {
        method: "POST",
        body: formData, // ❌ Don't set headers manually for multipart
      });

      const data = await res.json();
      if (data.success) {
        setMessage("✅ Food added successfully!");
        // reset form
        setName("");
        setPrice("");
        setCategory("");
        setDescription("");
        setImage(null);
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setMessage("❌ Something went wrong");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Add Food Item</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Add Food</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddFood;
