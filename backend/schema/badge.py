from main import db
from sqlalchemy.orm import Mapped, mapped_column


class Badge(db.Model):
    __tablename__ = "tbl_badge"

    badge_id: Mapped[int] = mapped_column(primary_key=True)
    badge_name: Mapped[str] = mapped_column(unique=True)
    badge_description: Mapped[str] = mapped_column()
    badge_category: Mapped[str] = mapped_column()
    badge_level_points: Mapped[int[]] = mapped_column()
