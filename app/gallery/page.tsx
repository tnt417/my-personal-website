import ImageWithTooltip from '../../components/ImageWithTooltip';

// pages/index.js
export default function Gallery() {
  const images = [
    { path: '/images/gallery_boss.gif', tooltip: 'Tooltip here' },
    { path: '/images/gallery_multiplayer_bow.gif', tooltip: 'Tooltip here' },
    { path: '/images/league_clone_abilities.gif', tooltip: 'Tooltip here' },
    { path: '/images/flamethrower.gif', tooltip: 'Tooltip here' },
    { path: '/images/item_manager.gif', tooltip: 'Tooltip here' },
    { path: '/images/enemy_stress_test.gif', tooltip: 'Tooltip here' },
    // Add more images as needed
  ];

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 pt-0">
        {images.map((img, index) => (
          <ImageWithTooltip
            key={index}
            src={img.path}
            alt={'Image ' + index}
            tooltipText={img.tooltip}
            />
        ))}
      </div>
  );
}