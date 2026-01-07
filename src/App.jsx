import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MasterLibrary from './components/MasterLibrary';
import CommunitySection from './components/CommunitySection';
import SecondaryCTA from './components/SecondaryCTA';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
    return (
        <div className="min-h-screen bg-bg-dark text-text-primary selection:bg-accent-red/30">
            <Navbar />
            <main>
                <Hero />
                <MasterLibrary />
                <CommunitySection />
                <SecondaryCTA />
                <ProductGrid />
            </main>
            <Footer />
            <Chatbot />
        </div>
    );
}

export default App;
