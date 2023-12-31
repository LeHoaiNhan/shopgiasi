USE [DBSTORE]
GO
/****** Object:  User [user]    Script Date: 12/29/2023 5:27:21 PM ******/
CREATE USER [user] FOR LOGIN [user] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [user2]    Script Date: 12/29/2023 5:27:21 PM ******/
CREATE USER [user2] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 12/29/2023 5:27:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[URLCategory] [varchar](100) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 12/29/2023 5:27:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Price] [int] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[CategoryID] [int] NOT NULL,
	[URLProduct] [varchar](100) NULL,
	[Description] [nvarchar](500) NULL,
	[img] [varchar](100) NULL,
	[img1] [varchar](100) NULL,
	[img2] [varchar](100) NULL,
	[img3] [varchar](100) NULL,
	[img4] [varchar](100) NULL,
	[img5] [varchar](100) NULL
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[SelectAllProduction]    Script Date: 12/29/2023 5:27:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[SelectAllProduction]
AS

BEGIN
 SELECT * FROM dbo.Production
END
GO
/****** Object:  StoredProcedure [dbo].[SelectPageProduction]    Script Date: 12/29/2023 5:27:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
   
create PROC [dbo].[SelectPageProduction] 
  @maxID INT =0  
AS  
BEGIN  
 SELECT TOP 8 * FROM dbo.Production  WHERE ID > @maxID
END
GO
