import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faBookOpen,
  faCogs,
  faHome,
  faMap,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
// https://fontawesome.com/icons

const faIcons = [
  faBookOpen, faCogs, faHome,
  faMap, faMapMarkerAlt
];
library.add(...faIcons);
