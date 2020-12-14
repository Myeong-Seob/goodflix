import React from "react";
import { tvApi } from "API";
import TvPresenter from "./TvPresenter";

export default class extends React.Component {
  state={
    loading:true,
    error:null,
    topRated : null,
    popular : null,
    airingToday : null
  }
  async componentDidMount(){
    try {
      const {data:{results:topRated}}= await tvApi.topRated();
      const {data:{results:popular}}= await tvApi.popular();
      const {data:{results:airingToday}}= await tvApi.airingToday();
      this.setState({topRated, popular,airingToday})
    } catch  {
      this.setState({
        error: "Cant' find Movies informations.",
      });
    }finally{
      this.setState({
        loading: false,
      });
    }
  }


  render(){
    console.log(this.state)
    const {topRated, popular,airingToday,error,loading} = this.state
    return(
      <TvPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    )
  }
}