import React from 'react';

const sliderImages = [
    "https://framerusercontent.com/images/SOfvcAOlzgfeTZml7rwTp84O9E.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/NeUwISmjPW4tIdBonFY3ltlgdM.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/ZOYr2xJx3EqJfT9HdpPoW2DDTA.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/hF12zY12PMtZD11xgvMh8ez3I4.jpeg?width=612&height=867",
    "https://framerusercontent.com/images/SgZEAshIR8SgiX2sCNjtXkgNNNA.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/vXwg8VpYf1pMLVQmE8NbjEYipmk.jpeg?width=612&height=877",
    "https://framerusercontent.com/images/22W09KHdo1QeaEyMvMsqgFciKU.jpeg?width=612&height=875",
    "https://framerusercontent.com/images/ViYKAbSyrY13JlLpQJ1u594xlI.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/1EL3JrCHX1KpKsslf8i8syhI.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/t1aCHCw36kL8TtQSWKCWXE8V8.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/pX3BLff8NWhSllGRgrIiIM2exE.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/iPBxmmH3n1p1akKkP9PRogQWjA.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/OgqwX98DwyKg9hkQiMR1WMWxy0.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/ikk7TJCpTFY4OMr43oTQtFKxfkU.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/fFcfRq5ReDnP6JcPd5pRECcNWQ.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/UZgvJOl7LloDdmg0PVsVpdwby8.jpeg?width=612&height=877",
    "https://framerusercontent.com/images/547Vblcrhjnad86yKZsIU8TkTs.jpeg?width=600&height=877",
    "https://framerusercontent.com/images/Fx20IPHRUB04aBQIkkN8fq6h0Oc.jpeg?width=612&height=877"
];

const InfiniteSlider = () => {
    return (
        <div className="w-full overflow-hidden py-24 relative">
            {/* Masking container */}
            <div
                className="relative flex whitespace-nowrap overflow-visible"
                style={{
                    maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 15%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 15%, rgb(0, 0, 0) 85%, rgba(0, 0, 0, 0) 100%)',
                    perspective: '2000px'
                }}
            >
                <div className="flex gap-12 animate-marquee items-center py-10 overflow-visible">
                    {[...sliderImages, ...sliderImages].map((src, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[180px] md:w-[240px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-110"
                            style={{
                                transform: 'rotateX(15deg) rotateY(-10deg)',
                                transformStyle: 'preserve-3d',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)'
                            }}
                        >
                            <img
                                src={src}
                                alt={`Book ${index}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 80s linear infinite;
                }

                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

export default InfiniteSlider;
