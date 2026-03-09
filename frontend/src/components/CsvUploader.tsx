'use client';

import React, { useState } from 'react';

export default function CsvUploader() {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        // Handle file upload here
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            console.log('File dropped:', files[0].name);
        }
    };

    return (
        <div
            className={`p-8 border-2 border-dashed rounded-lg text-center ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <p className="text-gray-600">
                Drag and drop your CSV or Excel file here, or click to browse
            </p>
            <input type="file" className="hidden" accept=".csv, .xlsx, .xls" />
        </div>
    );
}
