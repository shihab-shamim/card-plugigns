import React, { useState } from 'react';
import { Button, FormFileUpload } from '@wordpress/components';

const FileUploadExample = () => {
    const [imageUrl, setImageUrl] = useState(null);
    console.log(imageUrl)

    return (
        <FormFileUpload
            accept="image/*"
            onChange={(e) => {
                const file = e.currentTarget.files[0];
                if (file) {
                    const url = URL.createObjectURL(file);
                    setImageUrl(url);
                }
            }}
            render={({ openFileDialog }) => (
                <div>
                    <p>Upload an image below:</p>
                    <Button isSecondary onClick={openFileDialog}>
                        Upload image
                    </Button>
                    {imageUrl && <img src={imageUrl} alt="Uploaded preview" />}
                </div>
            )}
        />
    );
};

export default FileUploadExample;
