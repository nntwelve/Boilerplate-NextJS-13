type Props = {};
async function fetchScorms() {
  // const response = await fetch(
  //   'API DOMAIN',
  //   {
  //     next: {
  //       revalidate: 60,
  //     },
  //   }
  // );
  // const scorms = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

  return [
    {
      lmsProvider: 'https://canvas.phenikaa-uni.edu.vn',
      isPublic: false,
      uploadedAt: '2023-02-20T10:32:47.000Z',
      startAt: '2023-02-27T04:18:12.000Z',
      endAt: null,
      locale: 'en',
      _id: '63f34ca8f99358d284f90715',
      courseId: 5884,
      authorId: '637495554689907e82ab881f',
      courseCode: 'Tư tưởng Hồ Chí Minh ELN 01',
      name: 'Tư tưởng Hồ Chí Minh ELN 01',
      assignment: [
        {
          maxAttempt: -1,
          lmsProvider: 'https://canvas.phenikaa-uni.edu.vn',
          status: true,
          canvasAssignmentId: 43173,
          gradingAttempt: 1,
          totalQuizzes: 10,
          gradingMethod: 'FINISH_SLIDES',
          _id: '63fc7ebe0969500018a8b31b',
          name: 'Video Bài giảng Tuần 1.',
          description: 'Video Bài giảng Tuần 1.',
          totalSlides: 12,
          authorId: '637495554689907e82ab881f',
          scormType: 'full',
          scormPath:
            'https://scorm-pheuni.phx-smartschool.com/api/v1/campus/uploads/scorm/file-1677491901223.x-zip-compressed/index_lms.html',
          detail: {
            status: true,
            _id: '63fc7ebe0969500018a8b320',
            assignmentId: '63fc7ebe0969500018a8b31b',
            courseId: 5884,
            createdAt: '2023-02-27T09:58:22.583Z',
            updatedAt: '2023-02-27T09:58:22.583Z',
            __v: 0,
          },
        },
      ],
    },
  ];
}
async function CoursesPage(props: Props) {
  const scorms = await fetchScorms();
  return (
    <div>
      {scorms.map((scorm) => (
        <div key={scorm._id}>{scorm.name}</div>
      ))}{' '}
    </div>
  );
}

export default CoursesPage;
