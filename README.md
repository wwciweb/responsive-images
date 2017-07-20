# responsive-images
Generates responsive image sets via gulp and sharp

## Installation

### npm dependencies
`npm install`

### libvips
Follow the instructions on installing libvips at [http://www.vips.ecs.soton.ac.uk/index.php?title=Build_on_OS_X](http://www.vips.ecs.soton.ac.uk/index.php?title=Build_on_OS_X).

## Usage

JPEG files in `src/` are converted to JPEG and WebP variants at the defined sizes.

### Create variants

`gulp responsive`

### Optimize variants

`gulp optimize`
