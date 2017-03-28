/* tslint:disable */

import { environment } from '../../../environments/environment';

const PLUS_SVG = `
<svg xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path id="plus"
    fill="#000"
    d="M 5,11 L 11,11 L 11,5 L 13,5 L 13,11
    L 19,11 L 19,13 L 13,13 L 13,19
    L 11,19 L 11,13 L 5,13 L 5,11">
  </path>
</svg>`;

const MINUS_SVG = `
<svg xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path id="minus"
    fill="#000"
    d="M 5,13 L 19,13 L 19,11 L 5,11 L 5,13">
  </path>
</svg>`;

const DRAWER_SVG = `
<svg xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path id="drawer"
    fill="#000"
    d="M 21,6 L 21,8 L 3,8 L 3,6 Z
    M 21,13 L 21,11 L 3,11 L 3,13 Z
    M 21,16 L 21,18 3,18 L 3,16 L Z">
  </path>
</svg>`;

const ARROW_SVG = `
<svg xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24">
  <path id="arrow"
    fill="#000"
    d="M 12,4 L 10.6,5.4 L 16.17,11 L 19,11 Z
    M 19,11 L 20,12 L 19,13 L 4,13 L 4,11 Z
    M 19,13 L 12,20 L 10.6,18.6 L 16.17,13 Z">
  </path>
</svg>`;

const DIGITS_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path id="futura_zero" stroke="#000" stroke-width="0.2" fill="none" d="M6.125 12c0-4.224 2.38-8.678 5.875-8.678 3.514 0 5.952 4.416 5.952 8.678 0 4.224-2.438 8.487-5.952 8.487-3.494 0-5.875-4.224-5.875-8.487"/>
  <path id="futura_one" stroke="#000" stroke-width="0.2" fill="none" d="M10 4h3v17"/>
  <path id="futura_two" stroke="#000" stroke-width="0.2" fill="none" d="M 7.136 8.285 C 7.456 2.132 16.366 2.345 16.524 8.391 C 16.524 10.196 14.986 12.318 12.652 14.861 C 11.167 16.561 9.046 18.364 7.242 20.698 C 10.424 20.698 13.607 20.698 16.789 20.698"/>
  <g transform="translate(-0.48, 0)">
    <path id="futura_three" stroke="#000" stroke-width="0.2" fill="none" d="M8.868 7.648c-.265-2.864 2.175-3.82 3.607-3.82 5.993 0 4.932 8.275 0 8.275 6.205 0 5.357 8.91.053 8.91-4.88 0-4.668-3.18-4.615-3.924"/>
  </g>
  <path id="futura_four" stroke="#000" stroke-width="0.2" fill="none" d="M15.604 20.908V4.572L6.48 17.407h11.882"/>
  <path id="futura_five" stroke="#000" stroke-width="0.2" fill="none" d="M17.407 4.042h-5.834l-2.015 6.152c2.652-1.273 7.743.743 7.743 5.41-.53 5.728-8.166 7.32-10.606 2.652"/>
  <path id="futura_six" stroke="#000" stroke-width="0.2" fill="none" d="M13.59 4.042C9.45 10.3 7.01 11.68 6.8 15.286c.636 8.333 11.88 7 11.35 0-.743-6.365-8.168-6.577-10.555-2.758"/>
  <path id="futura_seven" stroke="#000" stroke-width="0.2" fill="none" d="M6.906 4.148H18.68L6.8 21.12"/>
  <path id="futura_eight" stroke="#000" stroke-width="0.2" fill="none" d="M12 12c-6.047-.106-6.047-8.168 0-8.168 5.622 0 5.622 8.168 0 8.168-6.047 0-6.895 8.805 0 8.805 5.622 0 5.622-8.805 0-8.805"/>
  <path id="futura_nine" stroke="#000" stroke-width="0.2" fill="none" d="M17.46 12.528c-2.386 3.82-9.812 3.606-10.554-2.758-.53-7 10.713-8.7 11.35 0-.212 3.606-2.652 4.985-6.79 11.244"/>
</svg>`;

const ANIMALS_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="819.2" height="561.298" viewBox="0 0 409.6 280.649"><path fill="#78909C" d="M26.705 118.377c1.87-25.086 11-47.174 27.382-66.282 18.464-21.576 41.604-32.36 69.4-32.36 10.573 0 26.28 1.672 47.136 4.977 20.857 3.337 36.558 4.97 47.142 4.97 16.18 0 39.517 6.042 70.014 18.082 5.403 2.054 11.93 7.675 19.598 16.79 4.357 5.386 11.1 13.5 20.224 24.29 2.074 1.46 4.78 3.63 8.103 6.552 3.318 2.884 5.595 4.14 6.827 3.726.42-1.256 1.467-3.005 3.126-5.282.83-.836 1.34-1.25 1.544-1.25.638.414 1.25.83 1.875 1.25.62.42.823 1.652.62 3.726-.422 3.738-.62 4.874-.62 3.413-.223 2.085-.516 3.42-.937 4.063-2.7 4.555-3.745 8.09-3.107 10.565.625 2.27 2.57 5.92 5.9 10.897 3.325 4.977 5.182 8.715 5.596 11.203-.205 1.864-.295 4.862-.295 9.022l-3.12 7.77c0 5.813 6.738 15.784 20.225 29.897 6.444 2.884 9.64 12.856 9.64 29.852 0 13.295-10.986 19.917-32.965 19.917-2.91 0-6.016-.09-9.34-.32-2.277-.816-5.6-1.747-9.953-2.78-5.18-.64-8.714-2.387-10.57-5.31-3.33-4.745-8.73-9.225-16.193-13.37-1.246-.6-3.064-2.884-5.45-6.84-2.392-3.943-4.517-6.43-6.374-7.478-1.856-1.022-4.56-1.24-8.096-.6-6.016 1.02-9.34 1.543-9.953 1.543-1.46 0-3.585-.408-6.38-1.25-2.806-.83-4.816-1.25-6.073-1.25-1.443 6.647-1.768 13.078-.93 19.292.202 1.672 1.25 3.024 3.112 4.045 2.915 2.08 4.46 3.216 4.677 3.445 1.856 1.442 3.834 3.828 5.9 7.133.422 1.263-.356 3.382-2.334 6.38-1.973 3.012-3.567 4.785-4.825 5.283-1.238.537-3.937.805-8.09.805-6.023 0-8.396.09-7.146.293-8.294-1.25-12.964-1.965-14.01-2.156-5.182-1.046-9.648-2.693-13.374-4.99-1.882-1.237-4.038-7.055-6.526-17.43-2.514-11.203-4.587-17.94-6.24-20.237-.408-.612-.925-.905-1.544-.905-1.046 0-2.762 1.02-5.142 3.113-2.386 2.042-4 3.177-4.817 3.42-2.896 12.224-4.37 18.03-4.37 17.392 0 4.785 1.346 8.803 4.045 12.134 2.693 3.317 5.507 6.533 8.416 9.633 3.52 3.943 5.282 7.363 5.282 10.272 0 1.646-.51 3.088-1.557 4.35-4.357 5.386-11.624 8.09-21.787 8.09-11.414 0-18.878-1.556-22.394-4.67-4.574-3.942-7.477-8.1-8.715-12.427-.204-1.047-.72-4.16-1.557-9.34-.415-3.126-1.352-4.976-2.788-5.59-4.166-.624-9.346-1.76-15.554-3.42-1.257-.828-2.603-2.908-4.058-6.225-2.685-6.42-4.664-10.782-5.914-13.066-6.234-3.114-16.186-6.623-29.884-10.553-.625 1.25-.918 2.986-.918 5.27 2.277 2.91 5.697 7.375 10.265 13.372 3.73 4.977 5.6 9.762 5.6 14.316 0 8.73-5.6 13.067-16.804 13.067-8.504 0-14.31-.6-17.43-1.852-4.555-1.862-8.396-6.24-11.51-13.066-5.186-11.433-8.09-17.863-8.714-19.305-3.324-7.67-5.602-14.43-6.833-20.25-.843-4.135-2.093-10.482-3.746-18.987-1.45-7.03-3.726-12.536-6.84-16.48-11.42-14.745-16.714-27.51-15.88-38.293z"/><path fill="#795548" d="M257.626 36.194c7.776 0 17.622.484 29.566 1.422 16.87 1.335 27.678 4.477 32.412 9.42 2.465 2.483 5.502 7.345 9.1 14.562 3.608 7.805 6.64 13.133 9.104 15.978 2.08-2.653 3.778-4.46 5.118-5.392 3.982-3.043 6.908-5.037 8.796-5.97 0 4.926.34 7.72 1.01 8.383.652.653 3.368 1.178 8.102 1.557 15.53.955 23.31 14.975 23.31 42.08 0 5.12-.28 10.902-.85 17.35-1.51 17.044-5.51 28.913-11.938 35.547-1.15 1.12-4.227 2.303-9.257 3.54-5.01 1.23-8.192 3.17-9.51 5.822-1.72 3.23-3.414 9.478-5.11 18.782-1.727 10.616-3.15 17.418-4.274 20.455l-4.273-5.673c-4.92-9.682-8.62-16.87-11.087-21.62-5.124-9.1-10.236-13.834-15.354-14.218-3.597-.38-9.187.955-16.76 3.974-5.7 2.472-11.285 4.932-16.782 7.392l-14.782 4c-5.12 2.074-8.622 5.857-10.522 11.36-.752 6.82-.566 12.037.57 15.634.56 1.702 2.607 3.854 6.11 6.4 3.51 2.554 5.27 4.6 5.27 6.11 0 3.422-2.553 6.267-7.678 8.522-4.185 1.906-8.266 2.845-12.23 2.845-6.44-1.696-11.087-3.404-13.943-5.1-2.268-.765-3.392-3.423-3.392-7.963 0-2.087.168-5.118.553-9.112.38-3.958.57-7.013.57-9.1 0-2.46-.19-4.58-.57-6.382-.384-1.802-2.413-3.09-6.103-3.853-3.696-.746-5.84-1.59-6.395-2.548-3.224-5.498-4.366-14.696-3.41-27.58h-35.82c-11.77-.203-23.324-4.26-34.685-12.228-1.34 2.086-3.994 4.115-7.963 6.126-3.994 1.976-6.162 3.457-6.547 4.39-.385 1.894-1.894 4.704-4.547 8.382-2.652 3.72-4.074 6.703-4.267 8.954-1.51 14.993 8.918 32.137 31.285 51.466-7.584 3.037-14.8 4.548-21.62 4.548-1.697 0-3.423-.088-5.12-.274 0-1.516.1-4.443.292-8.82.193-3.59 0-6.244-.57-7.946-1.703-5.135-5.306-11.57-10.808-19.353-6.058-8.51-9.946-14.766-11.648-18.753l3.125-20.48-6.82 6.53c-3.795 6.25-7.69 12.487-11.66 18.735-3.8 7.188-5.968 14.096-6.546 20.706-.756 10.027 5.405 20.718 18.486 32.06-.764-.186-2.076.054-3.975.718-1.894.66-2.844 1.266-2.844 1.837-10.038-1.702-16.013-3.51-17.908-5.398-2.466-3.393-4.08-8.413-4.838-15.04-.198-5.486-.385-10.982-.57-16.485-.2-2.46-.56-7.078-1.138-13.92-.57-6.04-.845-10.773-.845-14.19 0-3.403 2.355-8.09 7.1-14.06 4.734-5.97 7.49-10.166 8.26-12.632.554-2.466-.484-8.61-3.142-18.462-3.235-11.54-4.827-19.503-4.827-23.84 0-2.658.368-4.827 1.12-6.54-2.454 17.82-5.772 29.653-9.933 35.535-10.245 14.422-20.563 21.604-30.997 21.604-3.037 0-5.223-.933-6.54-2.846-1.504-2.25-1.37-4.93.43-7.962 1.79-3.043 7.102-5.748 15.92-8.11 8.815-2.37 14.167-4.784 16.067-7.25 2.652-3.61 5.118-12.06 7.385-25.335 2.093-11.594 5.59-19.172 10.522-22.78 17.25-12.155 35.343-21.02 54.29-26.622 18.95-5.603 33.18-9.736 42.657-12.37 31.647-11.007 59.604-16.52 83.866-16.52z"/><path fill="#BDBDBD" d="M223.173 43.413c6.028 0 11.875 3.49 17.558 10.462 5.67 6.97 8.956 10.46 9.845 10.46h8.53c18.436 0 32.717 9.228 42.834 27.68 2.665 5.166 6.738 12.75 12.25 22.773 5.486 10.038 11.888 17.446 19.167 22.24 8.156 5.33 16.404 8.267 24.74 8.785 3.896.18 8.168-.534 12.785-2.142 4.08-1.783 8.153-3.573 12.23-5.357l2.662 5.91c-13.124 10.073-25.63 15.268-37.522 15.628-12.767.356-26.527-2.746-41.244-9.29 12.59 14.555 23.422 23.425 32.472 26.604l-2.128 2.145c-15.967-2.84-30.7-11.014-44.18-24.492l-10.646 6.363c0 .715-.663 1.466-1.995 2.26-1.33.797-1.917 1.45-1.74 1.983.715 2.306 4.358 7.972 10.917 16.974 6.565 9.034 9.845 13.81 9.845 14.328 0 1.593-2.044 3.18-6.123 4.777-4.078 1.59-6.29 3.362-6.645 5.31-.36 1.593.164 3.54 1.593 5.833 1.41 2.306 2.125 3.703 2.125 4.25 0 3.53-3.104 5.736-9.303 6.63-1.078.165-4.454.263-10.123.263-10.638 0-18.272-2.39-22.886-7.15-3.72-4.058-6.66-11.483-8.788-22.252-.714-3.703-1.948-10.33-3.72-19.883-18.094 4.61-36.727 6.92-55.897 6.92-11.713 0-24.398-.88-38.06-2.663 2.31 5.86 5.592 15.626 9.864 29.285-8.874-1.247-19.528-3.018-31.94-5.326-5.51 8.33-10.218 12.328-14.117 11.97-6.92-.52-16.862-3.98-29.81-10.36-3.196-1.595-4.79-3.998-4.79-7.196 0-3.187 2.488-9.05 7.454-17.564 4.958-8.51 7.62-14.455 7.978-17.833.358-3.026-.516-7.178-2.646-12.51-2.665-6.922-4.176-11.432-4.53-13.576h1.068l-2.13-6.387c-8.17 8.87-15.623 15.35-22.365 19.43-7.815 4.788-17.042 7.907-27.68 9.304-2.13-2.112-3.542-3.18-4.257-3.18 13.126-5.685 26.09-14.637 38.856-26.888.538-.535 3.9-2.92 10.123-7.196 3.54-2.302 5.667-5.034 6.384-8.23 4.428-17.74 13.478-30.266 27.14-37.542 11.175-5.85 26.886-8.772 47.106-8.772 9.228 0 18.017.617 26.35 1.852 3.9 1.07 10.12 2.322 18.632 3.733.715-7.062 3.2-13.332 7.457-18.808 4.794-6.37 10.56-9.554 17.3-9.554z"/></svg>`;

// Note that the titles are currently used as Google Analytics tracking labels.
export const DEMO_MAP = new Map<string, { start: string, end: string }>();
DEMO_MAP.set('Plus-to-minus icon', { start: PLUS_SVG, end: MINUS_SVG });
DEMO_MAP.set('Drawer-to-arrow icon', { start: DRAWER_SVG, end: ARROW_SVG });
DEMO_MAP.set('Morphing digits', { start: DIGITS_SVG, end: DIGITS_SVG });
DEMO_MAP.set('Morphing animals', { start: ANIMALS_SVG, end: ANIMALS_SVG });

// TODO: remove these until shape shifter supports splitting subpaths
if (!environment.production) {
  const PLAY_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <path d="M8 5v14l11-7z"/>
</svg>
`;

  const PAUSE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
</svg>
`;

  DEMO_MAP.set('Play-to-pause icon', { start: PLAY_SVG, end: PAUSE_SVG });
}
