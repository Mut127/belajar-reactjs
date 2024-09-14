import React from 'react';
import productImage1 from '../image/1.jpeg';

export default function ProductList() {
  // Data produk
  const products = [
    {
      title: 'Product 1',
      description: 'This is a great product.',
      price: '$29.99',
      image: 'https://id.pinterest.com/pin/4574037116392736/',
      serial: '123456789',
      createdBy: 'John Doe',
    },
    {
      title: 'Product 2',
      description: 'Another amazing product.',
      price: '$39.99',
      image: 'https://via.placeholder.com/50',
      serial: '987654321',
      createdBy: 'Jane Smith',
    },
    // Tambahkan produk lainnya jika diperlukan
  ];

  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Product List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Title
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Description
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Image
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Serial
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Created By
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-4 px-6 border-b border-gray-200 text-sm">
                    {product.title}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 text-sm">
                    {product.description}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 text-sm">
                    {product.price}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 text-sm">
                    <img src={product.image} alt="Product Image" className="w-12 h-12" />
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 text-sm">
                    {product.serial}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 text-sm">
                    {product.createdBy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
