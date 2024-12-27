import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../Header/Header";

const WatchStudio = () => {
  const cases = [
    {
      id: "aluminum",
      name: "Aluminum",
      price: 429,
      colors: [
        {
          id: "midnight",
          name: "Black Aluminum",
          img: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735248713/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_spbpzz.png",
        },
        {
          id: "starlight",
          name: "Gold Aluminum",
          img: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735248713/watch-case-46-aluminum-rosegold-nc-s10_VW_PF_watch-face-46-aluminum-rosegold-s10_VW_PF_nsepd1.png",
        },
        {
          id: "silver",
          name: "Silver Aluminum",
          img: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735248714/watch-case-46-aluminum-silver-nc-s10_VW_PF_watch-face-46-aluminum-silver-s10_VW_PF_fru0h2.png",
        },
      ],
    },
    {
      id: "titanium",
      name: "Titanium",
      price: 799,
      colors: [
        {
          id: "natural",
          name: "Natural Titanium",
          img: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735248715/watch-case-46-titanium-natural-cell-s10_VW_PF_watch-face-46-titanium-natural-s10_VW_PF_ujqq8t.png",
        },
        {
          id: "black",
          name: "Gold Titanium",
          img: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735248716/watch-case-46-titanium-gold-cell-s10_VW_PF_watch-face-46-titanium-gold-s10_VW_PF_zwzryr.png",
        },
      ],
    },
  ];

  const bands = [
    {
      id: "sport-band",
      name: "Sport Band",
      price: 49,
      colors: [
        {
          id: "midnight",
          img: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735246403/MXLX3ref_SR_S10_VW_PF_kijq7f.jpg",
        },
        {
          id: "storm-blue",
          img: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735246386/MXLQ3ref_SR_S10_VW_PF_rnl1zh.jpg",
        },
        {
          id: "starlight",
          img: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735246403/MXM63ref_SR_S10_VW_PF_dykavg.jpg",
        },
      ],
    },
    {
      id: "sport-loop",
      name: "Sport Loop",
      price: 49,
      colors: [
        {
          id: "midnight",
          img: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735232456/MYA33ref_SR_S10_VW_PF_tzuwlr.jpg",
        },
        {
          id: "blue",
          img: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735246897/MY8E3ref_SR_S10_VW_PF_eq6ru2.jpg",
        },
        {
          id: "starlight",
          img: "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735246403/MXM63ref_SR_S10_VW_PF_dykavg.jpg",
        },
      ],
    },
  ];

  const sizes = [
    { id: "41", name: "41mm" },
    { id: "45", name: "45mm" },
  ];

  const [activeTab, setActiveTab] = useState("size");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selection, setSelection] = useState({
    size: sizes[0],
    case: cases[0],
    caseColor: cases[0].colors[0],
    band: bands[0],
    bandColor: bands[0].colors[0],
  });

  const totalPrice = selection.case.price + selection.band.price;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  // Get current items for carousel based on active tab
  const getCurrentItems = () => {
    if (activeTab === "case") {
      return selection.case.colors;
    } else if (activeTab === "band") {
      return selection.band.colors;
    }
    return [];
  };

  const items = getCurrentItems();

  const nextSlide = () => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
    if (activeTab === "case") {
      setSelection({
        ...selection,
        caseColor: items[(currentIndex + 1) % items.length],
      });
    } else if (activeTab === "band") {
      setSelection({
        ...selection,
        bandColor: items[(currentIndex + 1) % items.length],
      });
    }
  };

  const prevSlide = () => {
    if (items.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    if (activeTab === "case") {
      setSelection({
        ...selection,
        caseColor: items[(currentIndex - 1 + items.length) % items.length],
      });
    } else if (activeTab === "band") {
      setSelection({
        ...selection,
        bandColor: items[(currentIndex - 1 + items.length) % items.length],
      });
    }
  };

  // Calculate preview size based on selected watch size
  const getPreviewSize = () => {
    return selection.size.id === "41"
      ? {
          container: "w-72 h-72",
          image: "w-74 h-74",
        }
      : {
          container: "w-80 h-80",
          image: "w-84 h-84",
        };
  };

  const previewSize = getPreviewSize();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {/* Watch Preview with Carousel */}
          <div className="h-[600px] relative">
            <motion.div
              className="w-full h-full bg-gray-50 rounded-3xl p-8 flex items-center justify-center relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Carousel Navigation Buttons */}
              {(activeTab === "case" || activeTab === "band") &&
                items.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

              {/* Watch Preview */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selection.size.id}-${selection.case.id}-${selection.caseColor.id}-${selection.band.id}-${selection.bandColor.id}`}
                  className={`${previewSize.container} rounded-[44px] shadow-xl relative transition-all duration-300`}
                  style={{ backgroundColor: selection.caseColor.hex }}
                  initial={{ opacity: 0, scale: 0.9, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -100 }}
                >
                  <img
                    src={selection.bandColor.img}
                    alt={selection.band.name}
                    className={`absolute inset-0 ${previewSize.image} object-contain transition-all duration-300`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={selection.caseColor.img}
                      className={`${previewSize.image} transition-all duration-300`}
                      alt={selection.caseColor.name}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              {(activeTab === "case" || activeTab === "band") &&
                items.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {items.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
            </motion.div>
          </div>

          {/* Configuration Panel */}
          <div className="space-y-8">
            {/* Tabs */}
            <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
              {["size", "case", "band"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab ? "bg-white shadow-sm" : "text-gray-600"
                  }`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Size Selection */}
              {activeTab === "size" && (
                <motion.div
                  key="size"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      className={`p-6 rounded-2xl border-2 transition-colors ${
                        selection.size.id === size.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelection({ ...selection, size })}
                    >
                      <div className="text-lg font-medium">{size.name}</div>
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Case Selection */}
              {activeTab === "case" && (
                <motion.div
                  key="case"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {cases.map((caseOption) => (
                      <button
                        key={caseOption.id}
                        className={`p-6 rounded-2xl border-2 transition-colors ${
                          selection.case.id === caseOption.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() =>
                          setSelection({
                            ...selection,
                            case: caseOption,
                            caseColor: caseOption.colors[0],
                          })
                        }
                      >
                        <div className="text-lg font-medium mb-2">
                          {caseOption.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          From ${caseOption.price}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Colors</h3>
                    <div className="flex gap-4">
                      {selection.case.colors.map((color) => (
                        <button
                          key={color.id}
                          className="group flex flex-col items-center gap-2"
                          onClick={() =>
                            setSelection({ ...selection, caseColor: color })
                          }
                        >
                          <img
                            src={color.img}
                            alt={color.id}
                            className={`w-16 h-16 rounded-xl border transition-all ${
                              selection.caseColor.id === color.id
                                ? "ring-2 ring-blue-500 ring-offset-2"
                                : "group-hover:ring-2 group-hover:ring-gray-300 group-hover:ring-offset-2"
                            }`}
                          />
                          <span className="text-sm">{color.id}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Band Selection */}
              {activeTab === "band" && (
                <motion.div
                  key="band"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {bands.map((band) => (
                      <button
                        key={band.id}
                        className={`p-6 rounded-2xl border-2 transition-colors ${
                          selection.band.id === band.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() =>
                          setSelection({
                            ...selection,
                            band,
                            bandColor: band.colors[0],
                          })
                        }
                      >
                        <div className="text-lg font-medium mb-2">
                          {band.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          From ${band.price}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Colors</h3>
                    <div className="flex gap-4">
                      {selection.band.colors.map((color) => (
                        <button
                          key={color.id}
                          className="group flex flex-col items-center gap-2"
                          onClick={() =>
                            setSelection({ ...selection, bandColor: color })
                          }
                        >
                          <img
                            src={color.img}
                            alt={color.id}
                            className={`w-16 h-16 rounded-xl border transition-all ${
                              selection.bandColor.id === color.id
                                ? "ring-2 ring-blue-500 ring-offset-2"
                                : "group-hover:ring-2 group-hover:ring-gray-300 group-hover:ring-offset-2"
                            }`}
                          />
                          <span className="text-sm">{color.id}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="border-t pt-6">
              <div className="text-lg font-semibold">
                Total Price: ${totalPrice}
              </div>
            </div>
            <div className="mt-8 space-y-2 ">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold">
                  {selection.size.name} {selection.case.name} Case
                </h1>
                <p className="text-gray-600">
                  {selection.caseColor.name} with {selection.band.name}
                </p>
              </div>
              <div className="text-lg font-semibold">
                Total Price: ${totalPrice}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WatchStudio;
