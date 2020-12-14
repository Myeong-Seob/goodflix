import { moviesApi, tvApi } from "API";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
    constructor(props){
        super(props)
        const {location:{pathname}} = props;
        this.state = {
          result: null,
          error: null,
          loading: true,
          isMovie:pathname.includes("/movie/")
        };
    }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },history:{push},
    } = this.props;
    const {isMovie} = this.state;
    const parsedId = parseInt(id);
    if(isNaN(parsedId)){
        return push("/");
    }
    let result = null;
    try {
        if(isMovie){
            const reqeust = await moviesApi.movieDetail(parsedId);
            result = reqeust.data
        }else{
            const reqeust = await tvApi.showDetail(parsedId);
            result = reqeust.data
        }
    } catch {
        this.setState({error:"Can't find anything."})
    }finally{
        this.setState({loading:false,result})
    }
  }

  render() {
      console.log(this.state)
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
