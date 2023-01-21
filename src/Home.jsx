import Nullstack from "nullstack";
import "./Home.css";

class Home extends Nullstack {
  textAreaIsDisabled = true;
  inputIsDisabled = true;

  toggleInput() {
    this.inputIsDisabled = !this.inputIsDisabled;
    console.log("this.inputIsDisabled", this.inputIsDisabled);
  }

  toggleTextArea() {
    this.textAreaIsDisabled = !this.textAreaIsDisabled;
    console.log("this.textAreaIsDisabled", this.textAreaIsDisabled);
  }

  render() {
    return (
      <section>
        TextArea:&nbsp;
        <textarea type="text" disabled={this.textAreaIsDisabled} />
        <button onclick={this.toggleTextArea}>Toggle</button>
        <br />
        <br />
        <br />
        <br />
        Input:&nbsp;
        <input type="text" disabled={this.inputIsDisabled} />
        <button onclick={this.toggleInput}>Toggle</button>
      </section>
    );
  }
}

export default Home;
