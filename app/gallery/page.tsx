"use client";
import { useState } from 'react';
import ImageWithTooltip from '../../components/ImageWithTooltip';
import Lightbox from "../../components/Lightbox";

// pages/index.js
export default function Gallery() {

  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null);

  const images = [
    { path: '/images/recurd_search.png', tooltip: 'Site-wide search feature for Recurd' },
    { path: '/images/alg_analysis.png', tooltip: 'Experiment results for benchmarking three transit algorithms' },
    { path: '/images/gophermatch_sublease.png', tooltip: 'The sublease listng page on the GopherMatch client' },
    { path: '/images/transit_grid.png', tooltip: 'A transit grid used as a visualizer for algorithm pathfinding' },
    { path: '/images/study_sign_in.png', tooltip: 'StudyLink: The sign-in page' },
    { path: '/images/study_group.png', tooltip: 'StudyLink: The study group creation modal' },
    { path: '/images/gophermatch_profile.png', tooltip: 'Gophermatch: A user\'s profile' },
    { path: '/images/recurd_profile.png', tooltip: 'Recurd: A user\'s profile displaying their top songs' },
    { path: '/images/game_console.png', tooltip: 'Knightward: The in-game console, serves as a chat between players as well' },
    { path: '/images/lava_fighting.png', tooltip: 'Knightward: Combat in a lava-themed zone' },
    { path: '/images/kw_items.png', tooltip: 'Knightward: Various custom items, with a dynamically populated item info panel' },
    { path: '/images/three_choices.png', tooltip: 'Knightward: Three card upgrade option inspired by modern roguelikes' },
    { path: '/images/controller_controls.png', tooltip: 'Knightward: Rebind menu with controller support' },
    { path: '/images/bow_skeleton.png', tooltip: 'Knightward: Taking down a skeleton with a bow' },
    { path: '/images/gallery_boss.gif', tooltip: 'Boss fight concept' },
    { path: '/images/gallery_multiplayer_bow.gif', tooltip: 'Multiplayer animations/projectiles' },
    { path: '/images/league_clone_abilities.gif', tooltip: 'Playing with shaders/VFX' },
    { path: '/images/flamethrower.gif', tooltip: 'A flamethrower' },
    { path: '/images/item_manager.gif', tooltip: 'Unity Editor: Custom item manager script to accelerate mass-producing items' },
    { path: '/images/enemy_stress_test.gif', tooltip: 'Knightward Pre-Release: Stress testing enemy performance' },
    // Add more images as needed
  ];

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4 space-y-4">
      {images.map((img, index) => (
          <ImageWithTooltip
            key={index}
            src={img.path}
            alt={'Image ' + index}
            tooltipText={img.tooltip}
            onClick={() => setSelectedImage({ src: img.path, alt: 'Image ' + index })}
          />
        ))}
      </div>

      {selectedImage && (
        <Lightbox
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}