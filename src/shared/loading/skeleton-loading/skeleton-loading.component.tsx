import React from 'react';

function SkeletonLoadingComponent() {
    return (
        <div
            className="flex flex-col bg-neutral-300 w-full h-full animate-pulse rounded-xl p-4 gap-4"
        >
        </div>

    );
}

export default SkeletonLoadingComponent;
