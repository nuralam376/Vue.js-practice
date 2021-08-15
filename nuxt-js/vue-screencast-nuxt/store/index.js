export const state = {
    videos : [],
    video : {}
};

export const mutations = {
    SET_VIDEOS(state,videos)
    {
        state.videos = videos;
    },
    SET_VIDEO(state,video)
    {
        state.video = video;
    }
};