require('@testing-library/jest-dom');

const {
  default: mockSafeAreaContext,
} = require('react-native-safe-area-context/jest/mock');

/* eslint-disable no-undef */
require('react-native-reanimated').setUpTests();

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const mockBottomSheet = require('@gorhom/bottom-sheet/mock');
jest.mock('@gorhom/bottom-sheet', () => mockBottomSheet);

jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = jest.requireActual(
    'react-native/Libraries/Utilities/Platform',
  );
  Platform.constants.reactNativeVersion = { major: 0, minor: 64, patch: 0 };
  return Platform;
});

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
