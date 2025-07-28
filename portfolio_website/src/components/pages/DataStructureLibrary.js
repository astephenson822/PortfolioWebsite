import React from 'react';
import '../../App.css';
import BackButton from '../BackButton';
import Footer from '../Footer';

export default function Data_Structure_Library() {
  return (
    <>
      <div className="about-me-page">
        <BackButton />
        
        <section className="about-me-section">
          <h2>Data Structure Library</h2>
          <p>
            <a 
              href="/DataStructureLibrary.zip" 
              download 
              style={{ textDecoration: 'underline', color: '#007bff' }}
            >
              Click here to download the DataStructureLibrary.zip
            </a>
          </p>
        </section>

        <section className="about-me-section">
          <h3>About This Library</h3>
          <p>
            {/* Replace this text with your actual explanation */}
            This custom-built data structure library is a collection of foundational structures implemented from scratch, including arrays, linked lists, stacks, queues, trees, and graphs. It was designed for educational purposes, demonstrating core concepts behind these structures in a clean and easy-to-understand way.
          </p>
          <p>
            Each structure is modular and well-documented, making it easy to integrate into your own projects or study for computer science courses. Future additions may include advanced features like heaps, hash maps, and balanced trees (e.g., AVL, Red-Black Trees).
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}
