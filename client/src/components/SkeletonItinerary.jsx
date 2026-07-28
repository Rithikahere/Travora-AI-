function SkeletonItinerary() {
  return (
    <div className="mt-12 animate-pulse space-y-8">
      {/* Hero Card */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className="h-64 bg-gradient-to-r from-orange-100 via-amber-100 to-orange-100"></div>

        <div className="space-y-4 p-8">
          <div className="h-8 w-2/3 rounded bg-stone-200"></div>
          <div className="h-4 w-full rounded bg-stone-200"></div>
          <div className="h-4 w-5/6 rounded bg-stone-200"></div>
        </div>
      </div>

      {/* Day Cards */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="rounded-3xl bg-white p-6 shadow-lg"
        >
          <div className="mb-5 h-6 w-32 rounded bg-orange-200"></div>

          <div className="space-y-3">
            <div className="h-4 rounded bg-stone-200"></div>
            <div className="h-4 w-11/12 rounded bg-stone-200"></div>
            <div className="h-4 w-3/4 rounded bg-stone-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonItinerary;