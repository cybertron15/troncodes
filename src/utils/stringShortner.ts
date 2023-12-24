function stringShortner(st: string, size:number,) {
    return st.length > size ? `${st.slice(0, size)}...` : st
}

export default stringShortner