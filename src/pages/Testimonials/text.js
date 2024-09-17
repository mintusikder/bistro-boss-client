{reviews.map((review) => (
    <SwiperSlide key={review._id}>
      <div className="m-24">
        {/* <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly /> */}
        <p>{review.details}</p>
        <h3 className="text-3xl ">{review.name}</h3>
      </div>
    </SwiperSlide>
  ))}