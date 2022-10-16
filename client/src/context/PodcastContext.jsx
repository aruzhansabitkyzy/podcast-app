
const PodcastContext = createContext(null);

export const PodcastProvider = () => {
    
    

    return (
        <PodcastContext.Provider>
           {children}
        </PodcastContext.Provider>
    )
}