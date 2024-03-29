export const TOTAL_FRETS = 24;
export const FRET_WIDTH = 76;
export const TOTAL_NOTES = 12;

export const GLOBAL_CONFIG = {
    0: {
        normal: 'C',
        secondName: 'H#',
        active: false,
    },
    1: {
        normal: 'C#',
        secondName: 'Ab',
        active: false,
    },
    2: {
        normal: 'D',
        active: false,
    },
    3: {
        normal: 'D#',
        secondName: 'Eb',
        active: false,
    },
    4: {
        normal: 'E',
        secondName: 'Fb',
        active: false,
    },
    5: {
        normal: 'F',
        secondName: 'E#',
        active: false,
    },
    6: {
        normal: 'F#',
        secondName: 'Gb',
        active: false,
    },
    7: {
        normal: 'G',
        active: false,
    },
    8: {
        normal: 'G#',
        secondName: 'Ab',
        active: false,
    },
    9: {
        normal: 'A',
        active: false,
    },
    10: {
        normal: 'A#',
        secondName: 'Bb',
        active: false,
    },
    11: {
        normal: 'H',
        secondName: 'Cb',
        active: false,
    },
}

export const ZERO_FRET = [
    {
        position: 4,
        value: GLOBAL_CONFIG[4].normal,
        active: false,

    },
    {
        position: 11,
        value: GLOBAL_CONFIG[11].normal,
        active: false,
    },
    {
        position: 7,
        value: GLOBAL_CONFIG[7].normal,
        active: false,
    },
    {
        position: 2,
        value: GLOBAL_CONFIG[2].normal,
        active: false,
    },
    {
        position: 9,
        value: GLOBAL_CONFIG[9].normal,
        active: false,
    },
    {
        position: 4,
        value: GLOBAL_CONFIG[4].normal,
        active: false,
    },
];

export const CHROMATIC_SCALE: any[] = [];
for (var i = 0; i <= TOTAL_FRETS; i++) {
    const fret = ZERO_FRET.map(({ position }) => ({
        position: (i % 12) + position,
        value: GLOBAL_CONFIG[(i + position) % 12].normal,
        active: GLOBAL_CONFIG[(i + position) % 12].active,
    }));
    CHROMATIC_SCALE.push(fret);
};
