import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Dante, {
	defaultTheme,
	darkTheme,
	ImageBlockConfig,
	CodeBlockConfig,
	DividerBlockConfig,
	PlaceholderBlockConfig,
	EmbedBlockConfig,
	VideoBlockConfig,
	GiphyBlockConfig,
	VideoRecorderBlockConfig,
	SpeechToTextBlockConfig,
} from 'dante3'

APP.Dante3 = class {
	ref;
	constructor(data={}) {
		this.ref = React.createRef();

		const CustomDante3 = (props) => {
			return <Dante
				content="initial content"
				widgets={[
					ImageBlockConfig(),
					CodeBlockConfig(),
					DividerBlockConfig(),
					PlaceholderBlockConfig(),
					EmbedBlockConfig(),
					VideoBlockConfig(),
					GiphyBlockConfig(),
					VideoRecorderBlockConfig(),
					SpeechToTextBlockConfig()
				]}
			/>
		};

		const App = () => {
			return <React.StrictMode>
				<CustomDante3 />
			</React.StrictMode>;
		};

		ReactDOM.render(<App />, data.container);

		return this;
	}
}