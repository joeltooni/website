import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Root pages
        index: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        research: resolve(__dirname, 'research.html'),
        projects: resolve(__dirname, 'projects.html'),
        others: resolve(__dirname, 'others.html'),
        cv: resolve(__dirname, 'cv.html'),
        resources: resolve(__dirname, 'resources.html'),
        cameraCalibration: resolve(__dirname, 'camera-calibration.html'),
        cameraModel: resolve(__dirname, 'camera-model.html'),
        header: resolve(__dirname, 'header.html'),
        footer: resolve(__dirname, 'footer.html'),

        // Research pages
        groundbreakingResearch: resolve(__dirname, 'research/groundbreaking-research-paper.html'),
        selfSupervised: resolve(__dirname, 'research/self-supervised-adaptation.html'),
        indoorExploration: resolve(__dirname, 'research/indoor-exploration.html'),
        efficientRL: resolve(__dirname, 'research/efficient-reinforcement-learning.html'),
        generalization: resolve(__dirname, 'research/understanding-generalization.html'),

        // Project pages
        personalWebsite: resolve(__dirname, 'projects/personal-website-portfolio.html'),
        dataViz: resolve(__dirname, 'projects/data-visualization-dashboard.html'),
        mlModel: resolve(__dirname, 'projects/machine-learning-model.html'),
        openSource: resolve(__dirname, 'projects/open-source-contribution.html'),
        roboticsSim: resolve(__dirname, 'projects/robotics-simulation.html'),

        // Demo pages
        cameraModelDemo: resolve(__dirname, 'demos/camera-model-visualization.html'),
        cameraCalibrationDemo: resolve(__dirname, 'demos/camera-calibration-visualization.html'),
      },
    },
  },
});
