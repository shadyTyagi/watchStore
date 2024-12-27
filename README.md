Watch Studio
A React component that provides an interactive watch customization experience. Users can customize their watch by selecting different sizes, cases, and bands with real-time preview.
Features

Interactive 3D watch preview
Size selection (41mm/45mm)
Case material selection (Aluminum/Titanium)
Multiple case colors
Band style selection (Sport Band/Sport Loop)
Multiple band colors
Real-time price calculation
Responsive carousel navigation
Smooth animations using Framer Motion

Dependencies

React
Framer Motion
Lucide React
Tailwind CSS

npm install react-router-dom framer-motion tailwindcss

Component Structure
State Management
The component uses the following state:

{
activeTab: string, // Current active tab (size/case/band)
currentIndex: number, // Current carousel index
selection: { // User's current selection
size: object, // Selected watch size
case: object, // Selected case type
caseColor: object, // Selected case color
band: object, // Selected band type
bandColor: object // Selected band color
}
}

Key Features Implementation
Carousel Navigation

Previous/Next buttons for cycling through color options
Visual indicators showing current position
Smooth transitions using Framer Motion animations

Price Calculation
Automatically calculates total price based on:

Selected case price
Selected band price

Preview Sizing
Adjusts preview size based on selected watch size:

41mm: container (w-72 h-72), image (w-74 h-74)
45mm: container (w-80 h-80), image (w-84 h-84)

UI Components

Navigation Tabs

Size
Case
Band

Preview Section

Dynamic watch preview
Carousel navigation
Position indicators

Configuration Panel

Size selection
Case selection with material options
Band selection with style options
Color selection for both case and band

Animation Features
Uses Framer Motion for smooth transitions:

Tab content transitions
Watch preview updates
Carousel animations

Performance Considerations

Uses AnimatePresence for clean component mounting/unmounting
Efficient state updates for selection changes
Optimized image loading for preview updates

Style Guide
The component uses Tailwind CSS with:

Consistent spacing (gap-2, gap-4, gap-8, etc.)
Responsive design patterns
Interactive states (hover, active)
Smooth transitions
Accessible color contrast

Author: Rajat Tyagi
