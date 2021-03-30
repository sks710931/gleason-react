import {
  ChangeEventArgs,
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
  Table,
} from "@syncfusion/ej2-react-richtexteditor";

interface EditorProps {
  onContentChange: (eventArgs: string) => void;
}
export const Editor = ({ onContentChange }: EditorProps) => {
  const toolbarSettings = {
    items: [
      "Bold",
      "Italic",
      "Underline",
      "StrikeThrough",
      "FontName",
      "FontSize",
      "FontColor",
      "BackgroundColor",
      "LowerCase",
      "UpperCase",
      "|",
      "Formats",
      "Alignments",
      "OrderedList",
      "UnorderedList",
      "Outdent",
      "Indent",
      "|",
      "CreateLink",
      "Image",
      "|",
      "CreateTable",
      "|",
      "ClearFormat",
      "Print",
      "SourceCode",
      "FullScreen",
      "|",
      "Undo",
      "Redo",
    ],
  };
  const fontFamily = {
    default: "Roboto Slab",
    items: [
      { text: "Roboto Slab", value: "Roboto Slab, serif" },
      { text: "Ubuntu", value: "Ubuntu,sans-serif" },
      { text: "Courier New", value: "Courier New,Courier,monospace" },
      { text: "Georgia", value: "Georgia,serif" },
      { text: "Impact", value: "Impact,Charcoal,sans-serif" },
      { text: "Calibri Light", value: "CalibriLight" },
    ],
    width: "100px",
  };
  const insertImageSettings = {
    display: "block",
    saveUrl: process.env.REACT_APP_ENDPOINT_URL +"/admin/image/upload",
    path: process.env.REACT_APP_ENDPOINT_URL+"/Resources/Images/"
  };
  const textChangeHandler = (e: ChangeEventArgs) => {
    onContentChange(e.value);
  };

  
  return (
    <div className="editor">
      <RichTextEditorComponent
        change={(e) => textChangeHandler(e!)}
        width={1100}
        height={620}
        toolbarSettings={toolbarSettings}
        fontFamily={fontFamily}
        insertImageSettings={insertImageSettings}
      >
        <Inject
          services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar, Table]}
        />
      </RichTextEditorComponent>
    </div>
  );
};
