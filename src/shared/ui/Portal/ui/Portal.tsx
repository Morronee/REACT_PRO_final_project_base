import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
	id: string;
	children: React.ReactNode;
}

export const Portal = ({ id, children }: PortalProps) => {
	const [container, setContainer] = useState<HTMLElement>();

	useEffect(() => {
		let portalContainer = document.getElementById(id);

		if (!portalContainer) {
			portalContainer = document.createElement('div');
			portalContainer.setAttribute('id', id);
			document.body.appendChild(portalContainer);
		}

		setContainer(portalContainer);

		return () => {
			if (portalContainer && portalContainer.childNodes.length === 0) {
				document.body.removeChild(portalContainer);
			}
		};
	}, [id]);

	return container ? createPortal(children, container) : null;
};
