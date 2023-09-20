import React, { type ReactNode } from 'react';

interface ErrorBoundyProps {
  children: ReactNode;
}

interface ErrorBoundyState {
  hasError: boolean;
}

class ErrorBoundy extends React.Component<ErrorBoundyProps, ErrorBoundyState> {
  constructor(props: ErrorBoundyProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.group('[-] Something Went Wrong!');
    console.log(error);
    console.log(errorInfo);
    console.groupEnd();

    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className={
            'w-full h-fit p-[1rem] text-center font-bold bg-red-500/40 border-[2px] border-red-500 text-red-500'
          }>
          <p className={'!m-0 text-red-500'}>Something Went Wrong Here!</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundy;
