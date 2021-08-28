export const state = () => {
    posts : []
};

export const mutations= {
    SET_POSTS : (state, posts) => {
        state.posts = posts;
    }
};

export const actions = {
    async nuxtServerInit({commit}) {
        console.log("commit", commit);
    }
};