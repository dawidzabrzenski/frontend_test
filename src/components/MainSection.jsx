import BulletPointList from "./BulletPointList";
import FunctionButtonList from "./FunctionButtonList";
import TextContent from "./TextContent";

function MainSection({ dispatch, state, data, setData }) {
  return (
    <main>
      <div className="section-header">
        <h1 className="section-header__title">Nagłówek H1</h1>
      </div>
      <section className="section">
        <div className="bullet-point-box">
          <BulletPointList dispatch={dispatch} />
        </div>
        <div className="function-button-box">
          <FunctionButtonList
            dispatch={dispatch}
            data={data}
            setData={setData}
          />
        </div>
        <div className="text-content-box">
          <TextContent content={state.items} text={state.text} />
        </div>
      </section>
    </main>
  );
}

export default MainSection;
