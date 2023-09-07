const localStorageMock = (() => {
    let store: { [key: string]: string | null } = {};

    return {
        getItem: (key: string) => {
            return store[key] || null;
        },
        setItem: (key: string, value: any) => {
            store[key] = value.toString();
        },
        removeItem: (key: string) => {
            delete store[key];
        },
        clear: () => {
            store = {};
        },
    };
})();

Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
});
