import {mapGetters} from "vuex";

export const getState ={
    ...mapGetters(['getUsers','getCount']),
}