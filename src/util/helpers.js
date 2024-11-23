

export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function asyncInterval(callback, interval) {
    let stopped = false;

    const run = async () => {
        if (stopped) return;
        await callback();
        setTimeout(run, interval);
    };

    run();

    return () => { stopped = true; }; // Stops further executions
}
