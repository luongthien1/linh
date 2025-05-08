import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Col, Row } from 'react-bootstrap'
import './uploader.css'

const Uploader: React.FC = () => {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = (acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles])
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="uploader">
        <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {isDragActive ? (
            <p>Drop the files here...</p>
        ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
        )}
        </div>
        <Row className='mt-3'>
            <Col >
                {files.map((file, index) => (
                <Row key={index}>
                    <Col>{file.name}</Col>
                    <Col md='auto'>x</Col>
                </Row>
                ))}
            </Col>
        </Row>
    </div>
  )
}

export default Uploader