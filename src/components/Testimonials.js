import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import rightArrow from '../assets/rightArrow.svg';
import loader from '../assets/loader.svg';

export default function Testimonials(props) {
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);

  const spliceContent = (content) => {
    const contentArray = content.split('');
    return contentArray.length <= 75 ? content : contentArray.slice(0, 75).join('') + ' ...';
  }

  const handleDateTime = (dateTime) => {
    const dateTimeNow = new Date();
    const dateTimeThen = new Date(dateTime);
    const difference = dateTimeNow - dateTimeThen;
    const duration = [
      Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
      Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
      Math.floor(difference / (1000 * 60 * 60 * 24)),
      Math.floor(difference / (1000 * 60 * 60)),
      Math.floor(difference / (1000 * 60)),
      Math.floor(difference / 1000)
    ];

    if (duration[0] > 0) {
      return duration[0] !== 1 ? `${duration[0]} years ago` : 'a year ago';
    } else if (duration[1] > 0) {
      return duration[1] !== 1 ? `${duration[1]} months ago` : 'a month ago';
    } else if (duration[2] > 0) {
      return duration[2] !== 1 ? `${duration[2]} days ago` : 'a day ago';
    } else if (duration[3] > 0) {
      return duration[3] !== 1 ? `${duration[3]} hours ago` : 'an hour ago';
    } else if (duration[4] > 0) {
      return duration[4] !== 1 ? `${duration[4]} minutes ago` : 'a minute ago';
    } else if (duration[5] > 0) {
      return duration[5] !== 1 ? `${duration[5]} seconds ago` : 'a second ago';
    }
  }

  const handleExerciseTitle = (title) => {
    return title.split(' ').join('_');
  }

  useEffect(() => {

    async function fetchData() {
      setLoading(true);

      let URL = `https://exercism.org/api/v2/hiring/testimonials?order=${props.order}&page=${props.page.toString()}`;

      if (props.track !== "all") {
        URL += "&track=" + props.track;
      }
      if (props.exercise !== "") {
        URL += "&exercise=" + props.exercise;
      }

      console.log(URL);

      const response = await fetch(URL);
      const { testimonials } = await response.json();
      setTestimonials(testimonials.results);
      setLoading(false);

      const tracks = { 0: "all" };
      for (let i = 0; i < testimonials.tracks.length; i++) {
        tracks[i + 1] = testimonials.tracks[i];
      }

      testimonials.track_counts["all"] = 0;
      for (let i in testimonials.track_counts) {
        if (i !== "all") {
          testimonials.track_counts["all"] += testimonials.track_counts[i];
        }
      }

      props.setTracks(tracks);
      props.setTracksCount(testimonials.track_counts);
      props.setPages(testimonials.pagination.total_pages);
    }

    fetchData();

  }, [props.params]);

  return (
    <div className="
      flex flex-col
      relative 
      min-h-[70vh]
      font-poppins"
    >
      {
        loading && <div className="
          absolute 
          w-full h-full 
          bg-overlayWhite/95
          flex justify-center"
        >
          <img className="
            animate-spin
            h-14
            relative top-[25vh]" src={loader} alt=""
          />
        </div>
      }
      {
        testimonials.length !== 0 && testimonials.map((item, idx) => {
          return (
            <Link className="focus:bg-testimonialPurpleHoverBg"
              to={`/${item.mentor.handle}_${handleExerciseTitle(item.exercise.title)}`} key={idx}
            >
              <div className="
                px-7 py-2
                flex items-center justify-between
                min-h-[64px] 
              hover:bg-testimonialPurpleHoverBg
                border-b border-testimonialPurpleBorder"
              >
                <div className="
                  w-1/2
                  flex items-center"
                >
                  <div className="h-8">
                    <img className="h-full" src={item.track.icon_url} alt="" />
                  </div>
                  <div className="h-[42px] ml-6">
                    <img className="h-full rounded-full" src={item.mentor.avatar_url} alt="" />
                  </div>
                  <div className="details ml-5 ">
                    <div className="
                      hidden sm:flex
                      font-medium text-sm sm:text-base text-darkPurple"
                    >
                      {item.mentor.handle}
                    </div>
                    <div className="
                      hidden lg:flex 
                      text-sm text-lightPurple"
                    >
                      {`on ${item.exercise.title} in ${item.track.title}`}
                    </div>
                  </div>
                </div>

                <div className="
                  flex justify-between
                  w-fit md:w-full"
                >
                  <div className="
                    ml-5
                    hidden md:flex md:flex-wrap items-center
                    w-2/3 xl:w-fit 
                    text-left text-[15px] text-testimonialPurpleContent"
                  >
                    {spliceContent(item.content)}
                  </div>
                  <div className="
                    flex items-center
                    text-lightPurple text-sm"
                  >
                    <p className="
                      ml-2 lg:ml-0
                      font-medium"
                    >
                      {handleDateTime(item.created_at)}
                    </p>
                    <img className="
                      ml-5 lg:ml-16
                      cursor-pointer" src={rightArrow} alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      }
    </div >
  );
}
