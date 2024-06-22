import { InputsContainer } from "./InputsContainer/InputsContainer";
import { SelectionsContainer } from "./SelectionsContainer/SelectionsContainer";
import { RendererContainer } from "./RendererContainer/RendererContainer";
export default function MainContainer() {
  return (
    <div className="flex justify-center">
      <InputsContainer></InputsContainer>
      <SelectionsContainer></SelectionsContainer>
      <RendererContainer></RendererContainer>
    </div>
  );
}
