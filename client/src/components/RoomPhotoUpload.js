import React from 'react';

const RoomPhotoUpload = () => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Handle file upload
            console.log('File ready for upload:', file);
        }
    };

    return (
        <div className="room-photo-upload">
            <h2>Upload Room Photo</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
    );
};

export default RoomPhotoUpload;