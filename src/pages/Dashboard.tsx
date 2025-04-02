import CourseCard from "../Components/CourseCard";

interface Course {
  id: string;
  imageUrl: string;
  badgeText: string;
  title: string;
  bgColor:string;
  textColor:string
  actions: {
    onLike: string;
    onShare: string;
    onSave: string;
    onMore: string;
  };
}

const courseData: Course[] = [
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    badgeText: "Summer 2020",
    title: "Lorem Ipsum is simply dummy",
    id: "IT-229-OLA3",
    bgColor: "#FFD700",
    textColor: "#FFD700",
    actions: {
      onLike: "Liked!",
      onShare: "Shared!",
      onSave: "Saved!",
      onMore: "More!",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=500&auto=format&fit=crop&q=60",
    badgeText: "Winter 2021",
    title: "The quick brown fox jumps",
    id: "IT-230-XB21",
    bgColor: "#87CEEB",
    textColor: "#87CEEB",
    actions: {
      onLike: "Liked!",
      onShare: "Shared!",
      onSave: "Saved!",
      onMore: "More!",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&auto=format&fit=crop&q=60",
    badgeText: "Spring 2022",
    title: "A journey through the wild",
    id: "IT-231-QRT5",
    bgColor: "#98FB98",
    textColor: "#98FB98",
    actions: {
      onLike: "Liked!",
      onShare: "Shared!",
      onSave: "Saved!",
      onMore: "More!",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60",
    badgeText: "Autumn 2023",
    title: "Exploring new horizons",
    id: "IT-232-XYZ9",
    bgColor: "#FF4500",
    textColor: "#FF4500",
    actions: {
      onLike: "Liked!",
      onShare: "Shared!",
      onSave: "Saved!",
      onMore: "More!",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&auto=format&fit=crop&q=60",
    badgeText: "Monsoon 2024",
    title: "An adventure awaits",
    id: "IT-233-ABC7",
    bgColor: "#4682B4",
    textColor: "#4682B4",
    actions: {
      onLike: "Liked!",
      onShare: "Shared!",
      onSave: "Saved!",
      onMore: "More!",
    },
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60",
    badgeText: "Festival 2025",
    title: "Moments to cherish",
    id: "IT-234-PQR4",
    bgColor: "#8A2BE2",
    textColor: "#8A2BE2",
    actions: {
      onLike: "Liked!",
      onShare: "Shared!",
      onSave: "Saved!",
      onMore: "More!",
    },
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="mt-2 border border-gray-200 rounded-lg h-full w-full">
      {/* Header */}
      <div className="border-b-2 flex p-4 mx-4 border-gray-300">
        <h4>Dashboard</h4>
        <div className="ml-auto flex gap-x-2">
          <span>hello</span>
          <span>hello23</span>
        </div>
      </div>

      {/* Course List */}
      <div className="pl-4 py-4 pr-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseData.map((course) => (
          <CourseCard
            key={course.id}
            imageUrl={course.imageUrl}
            badgeText={course.badgeText}
            title={course.title}
            id={course.id}
            onLike={() => console.log(`Liked ${course.id}`)}
            onShare={() => console.log(`Shared ${course.id}`)}
            onSave={() => console.log(`Saved ${course.id}`)}
            onMore={() => console.log(`More ${course.id}`)}
            bgColor={course.bgColor}
            textColor={course.textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
