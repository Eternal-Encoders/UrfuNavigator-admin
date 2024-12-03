import { IFloor, IGraphPoint, IInstitute, IStair, ShemaType } from "./interfaces";

const institutes_shema: ShemaType<IInstitute> = {
    id: {
        inputType: 'text', 
        showDefault: true
    },
    name: {
        inputType: 'text', 
        showDefault: true
    },
    displayableName: {
        inputType: 'text', 
        showDefault: false
    },
    minFloor: {
        inputType: 'number', 
        showDefault: false
    },
    maxFloor: {
        inputType: 'number', 
        showDefault: false
    },
    url: {
        inputType: 'text', 
        showDefault: false
    },
    latitude: {
        inputType: 'number', 
        showDefault: false
    },
    longitude: {
        inputType: 'number', 
        showDefault: false
    },
    icon: {
        inputType: 'media', 
        showDefault: true
    }
}

const floor_shema: ShemaType<IFloor> = {
    id: {
        inputType: 'text', 
        showDefault: true
    },
    service: {
        inputType: 'json', 
        showDefault: false
    },
    audiences: {
        inputType: 'json', 
        showDefault: false
    },
    institute: {
        inputType: 'text', 
        showDefault: true
    },
    floor: {
        inputType: 'number', 
        showDefault: true
    },
    width: {
        inputType: 'number', 
        showDefault: false
    },
    height: {
        inputType: 'number', 
        showDefault: false
    }
}

const stair_shema: ShemaType<IStair> = {
    id: {
        inputType: 'text', 
        showDefault: true
    },
    stairPoint: {
        inputType: 'text', 
        showDefault: true
    },
    institute: {
        inputType: 'text', 
        showDefault: true
    },
    links: {
        inputType: 'json', 
        showDefault: true
    }
}

const graphPoint_shema: ShemaType<IGraphPoint> = {
    id: {
        inputType: 'text', 
        showDefault: true
    },
    x: {
        inputType: 'number', 
        showDefault: false
    },
    y: {
        inputType: 'number', 
        showDefault: false
    },
    links: {
        inputType: 'json', 
        showDefault: true
    },
    types: {
        inputType: 'json', 
        showDefault: true
    },
    names: {
        inputType: 'json', 
        showDefault: true
    },
    floor: {
        inputType: 'text', 
        showDefault: true
    },
    institute: {
        inputType: 'text', 
        showDefault: true
    },
    time: {
        inputType: 'json', 
        showDefault: false
    },
    description: {
        inputType: 'text', 
        showDefault: false
    },
    info: {
        inputType: 'text', 
        showDefault: false
    },
    menuId: {
        inputType: 'text', 
        showDefault: false
    },
    isPassFree: {
        inputType: 'boolean', 
        showDefault: false
    },
    stairId: {
        inputType: 'text', 
        showDefault: false
    }
}

const db_router: [string, string, ShemaType<unknown>][] = [
    // "users",
    // "media",
    ['institute', 'institutes', institutes_shema],
    ['floor', 'floors', floor_shema],
    ['stair', 'stairs', stair_shema],
    ['graph', 'graphs', graphPoint_shema]
];

export {
    db_router,
    institutes_shema,
    stair_shema,
    floor_shema,
    graphPoint_shema
}