import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white mt-n10 mt-md-n13 px-3 pl-xl-10 pr-xl-4">
      <div className="mb-4 mb-lg-7 ml-xl-4">
        <h6 className="font-weight medium font-size-10 mb-4 mb-lg-7">Добро пожаловать в Книжный магазин</h6>
        <p className="font-weight-medium font-italic">“ Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model search for eolved over sometimes by accident, sometimes on purpose ”</p>
      </div>
      <div className="mb-4 pb-xl-1 ml-xl-4">
        <h6 className="font-weight-medium font-size-4">Чем мы занимаемся?</h6>
        <p className="font-size-2">Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non
          tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius
          ultrices massa at faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet
          condimentum mi ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat. Aliquam non tincidunt
          urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at
          faucibus. Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi
          ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat.</p>
      </div>
      <div className="ml-xl-4">
        <div className="row">
          <div className="col-md-6">
            <h6 className="font-weight-medium font-size-4">Наши цели</h6>
            <p className="font-size-2">Pellentesque sodales augue eget ultricies ultricies. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sagittis ultrices condimentum.</p>
          </div>
          <div className="col-md-6">
            <h6 className="font-weight-medium font-size-4">Сотрудничество</h6>
            <p className="font-size-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat.
              Duis velit lectus, posuere a blandit metus mauris, tristique quis sapien eu, rutrum vulputate enim.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
