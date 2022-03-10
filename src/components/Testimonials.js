import axios from 'axios';
import React, { useEffect, useState } from 'react'
import rightArrow from '../assets/rightArrow.svg';
import loader from '../assets/loader.svg';

export default function Testimonials(props) {

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = `https://exercism.org/api/v2/hiring/testimonials?page=${props.currentPage}`;

  const spliceContent = (content) => {
    const contentArray = content.split(' ');
    return contentArray.length <= 11 ? content : contentArray.slice(0, 11).join(' ') + ' ...';
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
      return duration[0] != 1 ? `${duration[0]} years ago` : 'a year ago';
    } else if (duration[1] > 0) {
      return duration[1] != 1 ? `${duration[1]} months ago` : 'a month ago';
    } else if (duration[2] > 0) {
      return duration[2] != 1 ? `${duration[2]} days ago` : 'a day ago';
    } else if (duration[3] > 0) {
      return duration[3] != 1 ? `${duration[3]} hours ago` : 'an hour ago';
    } else if (duration[4] > 0) {
      return duration[4] != 1 ? `${duration[4]} minutes ago` : 'a minute ago';
    } else if (duration[5] > 0) {
      return duration[5] != 1 ? `${duration[5]} seconds ago` : 'a second ago';
    }
  }

  useEffect(() => {

    async function fetchData() {
      setLoading(true);
      const { data: { testimonials: { results } } } = await axios.get(URL);
      setTestimonials(results);
      setLoading(false);
    }

    fetchData();

  }, [props.currentPage]);
  // 
  return (
    <div className="testimonials flex flex-col relative min-h-[70vh]">
      {
        loading && <div className="absolute w-full h-full bg-[#FBFCFE]/95 flex justify-center items-center">
          <img className="animate-spin h-14" src={loader} alt="" />
        </div>
      }
      {
        testimonials.length != 0 && testimonials.map((item, idx) => {
          return (
            <div className="flex px-7 h-16 border-b border-[#EAECF3] hover:bg-[#F4F7FD]" key={idx}>

              <div className="testimonial_left flex items-center w-1/2">
                <div className="track h-8">
                  <img className="h-full" src={item.track.icon_url} alt="" />
                </div>
                <div className="avatar h-10 ml-6">
                  <img className="h-full rounded-full" src={item.mentor.avatar_url} alt="" />
                </div>
                <div className="details ml-5">
                  <div className="handle font-poppins font-medium text-[#130B43]">{item.mentor.handle}</div>
                  <div className="handle font-poppins text-sm text-[#5C5589]">{`on ${item.exercise.title} in ${item.track.title}`}</div>
                </div>
              </div>

              <div className="testimonial_center flex justify-between w-full">
                <div className="testimonial_center flex items-center p-0 font-poppins text-left text-[15px] text-[#3F3A5A]">
                  {spliceContent(item.content)}
                </div>

                <div className="testimonial_right flex items-center font-poppins text-sm">
                  {handleDateTime(item.created_at)}
                  <img className="ml-12 text-[#5C5589] cursor-pointer" src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          );
        })
      }
    </div >
  );
}
