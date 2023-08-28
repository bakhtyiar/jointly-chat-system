import React from 'react'

//auto scroll to bottom
export function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement | undefined> {
    const container = React.useRef<HTMLDivElement>();
    React.useEffect(() => {
        const { offsetHeight, scrollHeight, scrollTop } = container.current as HTMLDivElement
        if (scrollHeight <= scrollTop + offsetHeight + 100) {
            // noinspection TypeScriptValidateTypes
            container.current?.scrollTo(0, scrollHeight);
        }
    }, [dep]);
    return container;
}